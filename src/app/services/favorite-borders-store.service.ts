import {Injectable} from '@angular/core';
import {LocalStoreService} from './local-store.service';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteBordersStoreService {
  private favoriteBorders = new Subject<string[]>();
  ids$ = this.favoriteBorders.asObservable();

  constructor(private localStoreService: LocalStoreService) {
  }

  ids() {
    return this.getFavoriteBorders();
  }

  push(number) {
    const favoriteBorders = this.getFavoriteBorders();
    favoriteBorders.push(number);
    this.saveToFavorites(favoriteBorders);
  }

  private getFavoriteBorders() {
    return this.localStoreService.read('favoriteBorders') || [];
  }

  private saveToFavorites(favoriteIds) {
    const uniqueIds: string[] = this.removeDuplicates(favoriteIds);
    this.localStoreService.write('favoriteBorders', uniqueIds);
    this.favoriteBorders.next(uniqueIds);
  }

  private removeDuplicates(array: string[]): string[] {
    return [...new Set(array)];
  }
}
