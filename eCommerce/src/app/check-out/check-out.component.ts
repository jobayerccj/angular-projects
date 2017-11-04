import { Component, OnInit } from '@angular/core';
import { OrderService } from './../order.service';
import { ShoppingCartService } from './../shopping-cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  Order: {};
  constructor(
    private orderService: OrderService, 
    private router: Router, 
    private shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit() {
  }

  placeOrder(Order){
    this.orderService.create(Order);
    this.shoppingCartService.clearCart();
    
    this.router.navigateByUrl('order-success');
    console.log(Order);
  }

}
