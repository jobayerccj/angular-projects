import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router, ActivatedRoute } from '@angular/router';
import { AppUser } from './models/app.user';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/switchMap';
//import 'rxjs/add/observable/of'; 
import { UserService } from './user.service';
import * as firebase from 'firebase';


@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(private userService: UserService, private afauth: AngularFireAuth, private route: ActivatedRoute, private router: Router) { 
    this.user$ = afauth.authState;
  }

  login(){
    
    let returnUrl = this.route.snapshot.queryParamMap.get['returnUrl'] || '/';
    if(!localStorage.getItem('returnUrl')){
      localStorage.setItem('returnUrl', returnUrl);
    }
    

    this.afauth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout(){
    this.afauth.auth.signOut();
    this.router.navigateByUrl('/login');
  }

  get AppUser$(): Observable<AppUser>{
    
      return this.user$
      .switchMap(user => {
        if(user) return this.userService.get(user.uid);
        //return Observable.of(null);
      });

  }

}
