import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ApiService} from "../services/api.service";
import {JokePresentation} from "../services/models/joke-presentation";

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent  {
  emojiUrl='assets/laugh-emoji.png'

  @Input()
  joke:JokePresentation={};
  @Output()
  generateJokeEvent=new EventEmitter<void>();

  generateJoke(){
    this.generateJokeEvent.emit();
  }



}
