import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Border} from '../../interfaces/border';
import {interval, Observable, Subscription} from 'rxjs';
import {pipe} from 'rxjs';
import {map, filter} from 'rxjs/operators';

import {BorderService} from '../../services/border.service';
import {RecentBordersStoreService} from '../../services/recent-borders-storage.service';
import {BorderPayload} from '../../interfaces/border-payload';
import {environment} from '../../../environments/environment';
import {Store} from '@ngrx/store';
import {AppState} from '../../reducers';
import {LoadBorders} from '../../actions/border.actions';


@Component({
  selector: 'app-border-list',
  templateUrl: './border-list.component.html',
  styleUrls: ['./border-list.component.scss']
})
export class BorderListComponent implements OnInit {
  @Input() filter = '';
  visibleBorders$: Observable<any>;
  delayInMilliSeconds = environment.delayForNextRefresh;
  loading$: Observable<Boolean>;
  error$: Observable<Error>;

  constructor(private _border: BorderService,
              private recentBordersStorageService: RecentBordersStoreService,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    this.visibleBorders$ = this.store.select(store => store.borders.list);
    this.loading$ = this.store.select(store => store.borders.loading);
    this.error$ = this.store.select(store => store.borders.error);
  }


}
