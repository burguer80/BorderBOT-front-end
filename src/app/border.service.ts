import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';


import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BorderService {
  borders: AngularFireList<any>;

  constructor(private db: AngularFireDatabase, private _http: HttpClient) {
  }

  getBordersList(): Observable<any[]> {
    return this.db.list('borders').valueChanges();
  }
}
