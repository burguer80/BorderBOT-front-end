import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {BorderReducer, BorderState} from './borders.reducer';


export interface State {
  borders: BorderState;
}

export const reducers: ActionReducerMap<State> = {
  borders: BorderReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
