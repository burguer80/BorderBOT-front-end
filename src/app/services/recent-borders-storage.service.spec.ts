import {TestBed} from '@angular/core/testing';

import {RecentBordersStoreService} from './recent-borders-storage.service';

describe('RecentBordersStorageService', () => {
  let service: RecentBordersStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecentBordersStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
