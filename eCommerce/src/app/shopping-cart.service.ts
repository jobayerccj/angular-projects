import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Product } from './models/product';
import 'rxjs/add/operator/take';

@Injectable()
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  create(){
    return this.db.list('/shopping-cart').push({
      dateCreated: new Date().getTime()
    });
  }

  async getOrCreateCart():Promise<string>{
    let cartId = localStorage.getItem('cartId');
    if(!cartId){
      let result = await this.create();
      localStorage.setItem('cartId', result.key);

      return result.key;
    }
    else{
      return cartId;
    }
  }

  async getCart(){
    let cartId = await this.getOrCreateCart();
    return this.db.object('/shopping-cart/' + cartId);
  }

  async addToCart(product: Product){
    let cartId = await this.getOrCreateCart();
    let item$ = this.db.object('/shopping-cart/' + cartId + '/items/' + product.$key);

    item$.take(1).subscribe(item => {
      if(item.$exists()){
        item$.update({ product: product, quantity: item.quantity + 1});
      }
      else{
        item$.set({ product: product, quantity: 1});
      }
    })
  }

  async removeFromCart(product: Product){
    let cartId = await this.getOrCreateCart();
    let item$ = this.db.object('/shopping-cart/' + cartId + '/items/' + product.$key);

    item$.take(1).subscribe(item => {
      if(item.$exists()){
        item$.update({ product: product, quantity: item.quantity - 1});
      }

    })
  }

  async clearCart(){
    let cartId = await this.getOrCreateCart();
    this.db.object('/shopping-cart/' + cartId + '/items').remove();
    //localStorage.removeItem('cartId');
  }
}
