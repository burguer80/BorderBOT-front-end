import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Border} from '../../interfaces/border';
import {interval, Observable, Subscription} from 'rxjs';
import {pipe} from 'rxjs';
import {map, filter} from 'rxjs/operators';

import {BorderService} from '../../services/border.service';
import {RecentBordersStoreService} from '../../services/recent-borders-storage.service';
import {BorderPayload} from '../../interfaces/border-payload';
import {environment} from '../../../environments/environment';


@Component({
  selector: 'app-border-list',
  templateUrl: './border-list.component.html',
  styleUrls: ['./border-list.component.scss']
})
export class BorderListComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  @Input() filter = '';
  visibleBorders: any[];
  delayInMilliSeconds = environment.delayForNextRefresh;
  isLoading = true;

  constructor(private _border: BorderService,
              private recentBordersStorageService: RecentBordersStoreService) {
  }

  ngOnInit() {
    this.fetchRecentEvents();

    this.subscriptions.push(
      interval(this.delayInMilliSeconds).subscribe(() => this.fetchRecentEvents())
    );

    this.subscriptions.push(
      this.recentBordersStorageService.payload$.subscribe(payload => {
        this.visibleBorders = payload.ports;
      }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  private fetchRecentEvents() {
    this.isLoading = true;
    this._border.getBorders()
      .subscribe((res: BorderPayload) => {
        this.recentBordersStorageService.update(res);
        this.isLoading = false;
      });
  }
}
