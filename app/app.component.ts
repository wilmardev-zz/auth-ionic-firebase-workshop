import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { AuthPageComponent } from '../pages/auth-page/auth-page.component';
import * as firebase from 'firebase/app';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = AuthPageComponent;

  constructor(platform: Platform) {
    firebase.initializeApp({
      apiKey: "AIzaSyCaYRxIAP89uQJdtpFSRVYx8_FmR2lbfa4",
      authDomain: "auth-meetup-workshop.firebaseapp.com",
      databaseURL: "https://auth-meetup-workshop.firebaseio.com",
      projectId: "auth-meetup-workshop",
      storageBucket: "",
      messagingSenderId: "466065662977",
      appId: "1:466065662977:web:93e185cd9f837fdb"
    });
  }
}
