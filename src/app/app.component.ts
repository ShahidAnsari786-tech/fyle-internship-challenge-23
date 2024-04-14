import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  errorMessage: any;
  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.apiService.getUser('johnpapa').subscribe(
      (data) => {
        console.log(data); // Log the user data
      },
      (error) => {
        this.errorMessage = error.message; // Display error message
      }
    );
  }
}