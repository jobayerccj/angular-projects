import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ProductService } from './../product.service';
import { ShoppingCartService } from './../shopping-cart.service';
import { Product } from './../models/product';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: any[];
  cart: any;
  subscription: Subscription;

  @Input('product') product:Product;
  @Input('shopping-cart') shoppingCart;

  constructor(private productService: ProductService, private shoppingCartService: ShoppingCartService) { 
    this.productService.getAll()
    .subscribe(products => this.products = products);
  }

  async ngOnInit() {
    this.subscription = (await this.shoppingCartService.getCart()).subscribe(cart=> this.cart = cart);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  

}
