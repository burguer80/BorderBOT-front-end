import {Action} from '@ngrx/store';
import {Border} from '../interfaces/border';

export enum BorderActionTypes {
  LOAD_BORDERS = '[Border] Load Borders',
  LOAD_BORDER_SUCCESS = '[Border] Load Borders Success',
  LOAD_BORDERS_FAILURE = '[Border] Load Borders Failure',
}


export class LoadBorders implements Action {
  readonly type = BorderActionTypes.LOAD_BORDERS;
}

export class LoadBordersSuccess implements Action {
  readonly type = BorderActionTypes.LOAD_BORDER_SUCCESS;

  constructor(public payload: any) {
  }

}

export class LoadBordersFailure implements Action {
  readonly type = BorderActionTypes.LOAD_BORDERS_FAILURE;

  constructor(public payload: Error) {
  }
}


export type BorderActions = LoadBorders | LoadBordersSuccess | LoadBordersFailure;
