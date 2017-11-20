import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './../auth.service';
import { AppUser } from './../models/app.user';
import { ShoppingCartService } from './../shopping-cart.service';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  //user$: Observable<firebase.User>;

  /*constructor(private afauth: AngularFireAuth) {
    this.user$ = afauth.authState;
    console.log(this.user$);
    //afauth.authState.subscribe(authUser => console.log(this.user = authUser));
  }*/

  shoppingCartItemCount: number;

  appUser: AppUser;
  constructor(private auth: AuthService, private shoppingCartService: ShoppingCartService) {
    auth.AppUser$.subscribe(appUser => this.appUser = appUser)
  }

  async ngOnInit() {
    let cart$ = await this.shoppingCartService.getCart();
    
    cart$.subscribe(cart =>{
      this.shoppingCartItemCount = 0;

      for(let productId in cart.items){
        this.shoppingCartItemCount += cart.items[productId].quantity;
      }
    })
  }

  logout(){
    this.auth.logout();
  }

  /*logout(){
    console.log("Before Logout: ");
    console.log(this.user$);
    this.afauth.auth.signOut();
    
  }*/
}
