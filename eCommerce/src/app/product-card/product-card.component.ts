import { Component, OnInit,Input } from '@angular/core';
import { Product } from './../models/product';
import {ShoppingCartService } from './../shopping-cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input('product') product: Product;
  @Input('shopping-cart') shoppingCart;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  addToCart(product: Product){
    this.shoppingCartService.addToCart(product);
  }

  removeFromCart(product: Product){
    this.shoppingCartService.removeFromCart(product);
  }

  getQuantity(){
    
    if(!this.shoppingCart) return 0;

    let item = this.shoppingCart.items[this.product.$key];
    return item ? item.quantity:0;
  }

}
