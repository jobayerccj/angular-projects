import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/observable';

@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(private afauth: AngularFireAuth) { 
    this.user$ = afauth.authState;
  }

  login(){
    this.afauth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout(){
    this.afauth.auth.signOut();
  }

}
