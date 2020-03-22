import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {BorderService} from '../services/border.service';
import {Observable, of} from 'rxjs';
import {BorderActionTypes, LoadBorders, LoadBordersFailure, LoadBordersSuccess} from '../actions/border.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';


@Injectable()
export class LatestBordersEffects {

  @Effect()
  loadBorders$: Observable<any> = this.actions$.pipe(
    ofType(BorderActionTypes.LOAD_BORDERS),
    mergeMap(action =>
      this.borderService.getBorders().pipe(
        map(data =>
          new LoadBordersSuccess(data)
        ),
        catchError((err) => of(new LoadBordersFailure(err)))
      )
    )
  );


  constructor(private actions$: Actions, private borderService: BorderService) {
  }

}
