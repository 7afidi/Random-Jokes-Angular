import {Component, OnInit} from '@angular/core';
import {ApiService} from "./services/api.service";
import {JokePresentation} from "./services/models/joke-presentation";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private title = 'random-jokes';
   generatedJoke:JokePresentation={}
  constructor(private service:ApiService) {
  }
  ngOnInit(): void {
    this.generateJoke()
  }

   generateJoke() {
    this.service.generateJoke().subscribe({
      next: (data) => {
        this.generatedJoke = data;
      }
    });
  }

}
