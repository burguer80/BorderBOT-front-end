import {Component, Input, OnInit} from '@angular/core';
import {RecentBordersStoreService} from './services/recent-borders-storage.service';
import {Subscription} from 'rxjs';
import {FavoriteBordersStoreService} from './services/favorite-borders-store.service';

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

  constructor(private recentBordersStorageService: RecentBordersStoreService,
              private favoriteBordersStoreService: FavoriteBordersStoreService) {
    this.favoriteBorderIds = this.favoriteBordersStoreService.ids();
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.favoriteBordersStoreService.ids$.subscribe(ids => {
        this.favoriteBorderIds = ids;
        console.log('LocalStorageFavorites Obs ', ids);
      }));

    this.subscriptions.push(
      this.recentBordersStorageService.payload$.subscribe(payload => {
        this.favoriteBorders = payload.ports.filter(({number}) => this.favoriteBorderIds.includes(number));
        console.log('payload$ ', this.favoriteBorders);
      }));
  }

  toggleVisible() {
    this.searchVisible = !this.searchVisible;
  }

}
