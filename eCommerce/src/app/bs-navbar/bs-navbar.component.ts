import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  user: firebase.User;

  constructor(private afauth: AngularFireAuth) {
    afauth.authState.subscribe(authUser => console.log(this.user = authUser));
  }

  ngOnInit() {
    
  }

  logout(){
    console.log("Before Logout: ");
    console.log(this.user);
    this.afauth.auth.signOut();
    
  }
}
