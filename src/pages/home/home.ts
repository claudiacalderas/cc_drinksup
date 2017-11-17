import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  shoppingItems: Observable<any[]>;
  newItem = '';
 
  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider) {
    this.shoppingItems = this.firebaseProvider.getShoppingItems();
  }
 
  addItem() {
    this.firebaseProvider.addItem(this.newItem);
  }
 
  removeItem(id) {
    this.firebaseProvider.removeItem(id);
  }
}
