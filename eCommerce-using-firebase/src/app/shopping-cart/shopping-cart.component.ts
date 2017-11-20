import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './../shopping-cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart$;
  shoppingCartItemCount2:number;
  constructor(private shoppingCartService: ShoppingCartService, private router: Router) { }

  async ngOnInit() {
   
    let cart$ = await this.shoppingCartService.getCart();
    
    cart$.subscribe(cart =>{
      this.shoppingCartItemCount2 = 0;

      for(let productId in cart.items){
        this.shoppingCartItemCount2 += cart.items[productId].quantity;
      }
    })
  }

  open_checkout_page(){
    localStorage.setItem('returnUrl', 'check-out');
    this.router.navigateByUrl('/check-out');
  }

}
