import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class OrderService {

  constructor(private db: AngularFireDatabase) { }

  create(order){
   return this.db.list('/orders').push(order);
    //alert('order placed');
  }
}
