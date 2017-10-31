import { Injectable } from '@angular/core';
//Database Modules
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
//Observable
import { Observable } from 'rxjs/Observable';
//Client Data Model
import { Client } from '../models/Client';

@Injectable()
export class ClientService {
  clientsRef: AngularFireList<any>;
  clients: Observable<any[]>;
  client: Observable<any>;

  constructor(private db: AngularFireDatabase) {
    //Fetch Data from Database 
    this.clientsRef = this.db.list('clients');
    this.clients = this.clientsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }
  getClients(){
    return this.clients;
  }
}
