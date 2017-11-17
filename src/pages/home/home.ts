import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Databaseservice } from '../../providers/databaseservice'; 
import { FireabaseListObservable } from "angularfire2";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  accounts:FirebaseListObservable<any[]>
  constructor(public navCtrl: NavController, public db: Databaseservice) {
      this.accounts = this.db.listAccounts();
  }

}
