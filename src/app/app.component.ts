import {Component, Input, OnInit} from '@angular/core';
import {RecentBordersStoreService} from './services/recent-borders-storage.service';
import {Subscription} from 'rxjs';
import {FavoriteBordersStoreService} from './services/favorite-borders-store.service';
import {Store} from '@ngrx/store';
import {BorderState} from './reducers/borders.reducer';
import {LoadBorders} from './actions/border.actions';
import {AppState} from './reducers';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  filterValue = '';
  subscriptions: Subscription[] = [];
  favoriteBorders: any[];
  favoriteBorderIds = [];
  searchVisible = false;
  delayInMilliSeconds = environment.delayForNextRefresh;

  constructor(
    private store: Store<AppState>,
    private favoriteBordersStoreService: FavoriteBordersStoreService) {
    this.favoriteBorderIds = this.favoriteBordersStoreService.ids();
  }

  ngOnInit(): void {
    this.store.dispatch(new LoadBorders());
    setInterval(() => this.store.dispatch(new LoadBorders()), this.delayInMilliSeconds);

    this.subscriptions.push(
      this.favoriteBordersStoreService.ids$.subscribe(ids => {
        this.favoriteBorderIds = ids;
        console.log('LocalStorageFavorites Obs ', ids);
      }));
  }

  toggleVisible() {
    this.searchVisible = !this.searchVisible;
  }

}
