import {TestBed} from '@angular/core/testing';

import {FavoriteBordersStoreService} from './favorite-borders-store.service';

describe('FavoriteBordersStoreService', () => {
  let service: FavoriteBordersStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteBordersStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
