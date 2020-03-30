import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Border} from '../../interfaces/border';
import {Observable} from 'rxjs';

import {BorderService} from '../../services/border.service';
import {RecentBordersStoreService} from '../../services/recent-borders-storage.service';
import {Store} from '@ngrx/store';
import {AppState} from '../../reducers';


@Component({
  selector: 'app-border-list',
  templateUrl: './border-list.component.html',
  styleUrls: ['./border-list.component.scss']
})
export class BorderListComponent implements OnInit {
  @Input() filter = '';
  visibleBorders$: Observable<Border[]>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>;
  updatedAt$: Observable<string>;

  constructor(private _border: BorderService,
              private recentBordersStorageService: RecentBordersStoreService,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    this.error$ = this.store.select(store => store.borders.error);
    this.loading$ = this.store.select(store => store.borders.loading);
    this.visibleBorders$ = this.store.select(store => store.borders.list);
    this.updatedAt$ = this.store.select(store => store.borders.updated_at);
  }
}
