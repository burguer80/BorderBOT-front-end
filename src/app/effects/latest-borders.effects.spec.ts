import {TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {Observable} from 'rxjs';

import {LatestBordersEffects} from './latest-borders.effects';

describe('LatestBordersEffects', () => {
  let actions$: Observable<any>;
  let effects: LatestBordersEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LatestBordersEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<LatestBordersEffects>(LatestBordersEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
