import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
 
@Injectable()
export class FirebaseProvider {
 
  constructor(public afd: AngularFireDatabase) { 
  }
 
  getShoppingItems() {
    return this.afd.list('/shoppingItems/').valueChanges();
  }
 
  addItem(name) {
    let dataObject = {};
    dataObject.name = name;
    this.afd.list('/shoppingItems/').push(dataObject);
  }
 
  removeItem(id) {
    console.log('id',id);
    this.afd.list('/shoppingItems/').remove(id);
  }
}
