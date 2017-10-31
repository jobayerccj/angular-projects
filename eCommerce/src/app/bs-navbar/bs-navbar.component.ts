import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  user$: Observable<firebase.User>;

  constructor(private afauth: AngularFireAuth) {
    this.user$ = afauth.authState;
    console.log(this.user$);
    //afauth.authState.subscribe(authUser => console.log(this.user = authUser));
  }

  ngOnInit() {
    
  }

  logout(){
    console.log("Before Logout: ");
    console.log(this.user$);
    this.afauth.auth.signOut();
    
  }
}
