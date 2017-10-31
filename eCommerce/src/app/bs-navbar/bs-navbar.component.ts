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
    
    afauth.authState.subscribe(authUser => this.user = authUser);
    console.log(this.user);
  }

  ngOnInit() {
  }

  logout(){
    //this.afauth.auth.signOut();
  }
}
