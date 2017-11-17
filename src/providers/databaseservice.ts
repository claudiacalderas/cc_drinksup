import { Injectable } from '@angular/core';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class Databaseservice {

  constructor(private af: AngularFireDatabase) {
  }

  public listAccounts(): FirebaseListObservable<any[]>{
    // return this.af.database.list('/accounts');
  }
}