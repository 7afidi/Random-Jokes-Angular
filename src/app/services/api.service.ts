import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {JokePresentation} from "./models/joke-presentation";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 private BASE_URL='https://official-joke-api.appspot.com/random_joke';

  constructor(private http:HttpClient) {
  }
  generateJoke(){
    return this.http.get<JokePresentation>(this.BASE_URL);
  }
}
