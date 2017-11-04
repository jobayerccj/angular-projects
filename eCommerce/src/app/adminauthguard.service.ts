import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import {UserService } from './user.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdminauthguardService implements CanActivate{

  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean>{
    return this.auth.user$
    .switchMap(user => this.userService.get(user.uid))
    .map(appuser => appuser.isAdmin);
  }
}
