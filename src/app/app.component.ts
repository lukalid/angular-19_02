import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyBbTVpDKAM6M9029rdJ6XHLWVPGJPG3bFg',
      authDomain: 'angular-recipes-luka.firebaseapp.com'
    });
  }

}
