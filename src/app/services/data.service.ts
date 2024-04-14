import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject, Observable, Subject, catchError, finalize, mergeMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public userDataSubject = new BehaviorSubject<any>(null);
  userData$ = this.userDataSubject.asObservable();

  public reposDataSubject = new BehaviorSubject<any[]>([]);
  reposData$ = this.reposDataSubject.asObservable();

  public usernameSubject = new BehaviorSubject<string>('');
  username$ = this.usernameSubject.asObservable();

  public loadingSubject = new Subject<boolean>();
  loading$ = this.loadingSubject.asObservable();

  constructor(private apiService: ApiService) {}

  updateLoadingState(isLoading: boolean): void {
    this.loadingSubject.next(isLoading);
  }

  fetchUserData(githubUsername: string): void {
    this.resetState();
    this.updateLoadingState(true);
    this.apiService
      .getUser(githubUsername)
      .pipe(
        mergeMap((userData: any) => {
          this.userDataSubject.next(userData);
          console.log(userData);
          const reposUrl = userData.repos_url;
          // Fetch all repositories by paginating
          return this.fetchAllUserRepos(reposUrl);
        }),
        catchError((error) => {
          console.error('Error fetching user data:', error);
          throw error;
        }),
        finalize(() => {
          this.updateLoadingState(false);
        })
      )
      .subscribe({
        next: (userRepos: any[]) => {
          this.reposDataSubject.next(userRepos);
          console.log('User repositories:', userRepos);
        },
        error: (error) => {
          console.error('Error fetching user data:', error);
        },
      });
  }

  setUsername(username: string): void {
    this.usernameSubject.next(username);
    this.fetchUserData(username);
  }

  private resetState(): void {
    // Reset the user data, repositories, and loading state
    this.userDataSubject.next(null);
    this.reposDataSubject.next([]);
    this.loadingSubject.next(false);
  }

  // Function to fetch all repositories for the user by paginating
  private fetchAllUserRepos(reposUrl: string): Observable<any[]> {
    let allRepos: any[] = [];
    let page = 1;
    const perPage = 100; // Adjust perPage value as needed

    return new Observable<any[]>((observer) => {
      const fetchPage = () => {
        const url = `${reposUrl}?per_page=${perPage}&page=${page}`;
        this.apiService.getUserRepos(url).subscribe({
          next: (repos: any[]) => {
            allRepos.push(...repos);
            page++;
            // Check if there are more pages to fetch
            if (repos.length === perPage) {
              fetchPage(); // Fetch next page
            } else {
              observer.next(allRepos); // Emit all repositories
              observer.complete();
            }
          },
          error: (error) => {
            observer.error(error);
          }
        });
      };

      fetchPage(); // Start fetching first page
    });
  }
}
