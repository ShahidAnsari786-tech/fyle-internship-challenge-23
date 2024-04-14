import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.github.com';

  constructor(private httpClient: HttpClient) {}

  getUser(githubUsername: string): Observable<any> {
    const url = `https://api.github.com/users/${githubUsername}`;
    return this.httpClient.get(url).pipe(
      catchError((error) => {
        if (error.status === 403) {
          return throwError (() => new Error('API rate limit exceeded. Please try again later.')); // Directly return the error message string
        } else {
          return throwError (() => new Error('Failed to get user information')); // Generic error message
        }
      })
    );
  }

  getUserRepos(userReposLink: string): Observable<any[]> {
    return this.httpClient.get<any[]>(userReposLink).pipe(
      catchError((error) => {
        if (error.status === 404) {
          return throwError(() => ({ message: 'User not found' })); // Custom message for user not found
        } else {
          return throwError(() => ({ message: 'Failed to get user repositories' })); // Generic error message
        }
      })
    );
  }
}
