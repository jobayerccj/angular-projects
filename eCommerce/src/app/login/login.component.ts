import { Component, OnInit } from '@angular/core';
//import * as firebase from 'firebase';
//import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(/*private afauth: AngularFireAuth*/ private auth: AuthService) { 
    
  }

  ngOnInit() {
   
  }

  /*login(){
    this.afauth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }*/

  login(){
    this.auth.login();
  }

}
