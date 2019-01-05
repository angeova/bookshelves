import {Component} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    // Initialize Firebase
    const config = {
      apiKey           : 'AIzaSyCqJ9AGP48VFL4hqVM6j7LPrgtwyuIxC_c',
      authDomain       : 'bookshelves-60e80.firebaseapp.com',
      databaseURL      : 'https://bookshelves-60e80.firebaseio.com',
      projectId        : 'bookshelves-60e80',
      storageBucket    : 'bookshelves-60e80.appspot.com',
      messagingSenderId: '191207815295'
    };
    firebase.initializeApp(config);
  }
}
