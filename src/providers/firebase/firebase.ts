import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
 
@Injectable()
export class FirebaseProvider {
 
  constructor(public afd: AngularFireDatabase) { 
      this.shoppingItems = afd.list('shoppingItems').valueChanges();
  }
 
  getShoppingItems() {
    console.log(this.afd.list('shoppingItems').valueChanges());
    return this.afd.list('shoppingItems').valueChanges();
  }
 
  addItem(name) {
    this.afd.list('/shoppingItems').push(name);
  }
 
  removeItem(id) {
    this.afd.list('/shoppingItems').remove(id);
  }
}
