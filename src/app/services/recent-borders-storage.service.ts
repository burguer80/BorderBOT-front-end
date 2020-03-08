import {Injectable} from '@angular/core';
import {BehaviorSubject, fromEvent, Observable} from 'rxjs';
import {BorderPayload} from '../interfaces/border-payload';

@Injectable({
  providedIn: 'root'
})
export class RecentBordersStoreService {
  private borderPayload = new BehaviorSubject<BorderPayload>({ports: [], updated_at: ''});
  payload$ = this.borderPayload.asObservable();

  constructor() {
  }

  update(payload: BorderPayload) {
    this.borderPayload.next(payload);
  }
}
