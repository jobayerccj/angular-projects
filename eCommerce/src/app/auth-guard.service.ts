import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './../app/auth.service'; 
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate{
    constructor(private auth: AuthService, private router: Router) { 
  }

  canActivate(route, state: RouterStateSnapshot){
    return this.auth.user$.map(user=>{
      if(user) return true;
      console.log('state.url');
      console.log(state.url);
      this.router.navigate(['/login'], {queryParams: {returnUrl: state.url }});
      return false;
    });
  }

}
