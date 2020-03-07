import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';


import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BorderService {
  borders: AngularFireList<any>;

  constructor(
    private db: AngularFireDatabase,
    private _http: HttpClient,
    private ft: AngularFirestore) {
  }

  getBordersList(): Observable<any[]> {
    return this.db.list('borders').valueChanges();
  }

  getFilteredBorders(filter): AngularFireList<any> {
    return this.db.list('borders',
      ref => ref.orderByChild('name').equalTo(filter));
  }

  getBorders() {
    return this._http.get(environment.apiURL);
  }
}
