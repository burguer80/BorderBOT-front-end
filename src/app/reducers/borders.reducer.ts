import {Action} from '@ngrx/store';
import {Border} from '../interfaces/border';
import {BorderActions, BorderActionTypes} from '../actions/border.actions';


export const bordersFeatureKey = 'borders';

export interface BorderState {
  list: Border[];
  loading: boolean;
  error: Error;
}

export const initialState: BorderState = {
  list: [],
  loading: false,
  error: undefined
};

export function BorderReducer(state = initialState, action: BorderActions): BorderState {
  switch (action.type) {
    case BorderActionTypes.LOAD_BORDERS:
      return {
        ...state,
        loading: true
      };
    case BorderActionTypes.LOAD_BORDER_SUCCESS:
      return {
        ...state,
        list: action.payload.ports,
        loading: false
      };
    case BorderActionTypes.LOAD_BORDERS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
