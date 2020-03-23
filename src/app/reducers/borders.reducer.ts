import {Action} from '@ngrx/store';
import {Border} from '../interfaces/border';
import {BorderActions, BorderActionTypes} from '../actions/border.actions';


export const bordersFeatureKey = 'borders';

export interface BorderState {
  error: Error;
  list: Border[];
  loading: boolean;
  updated_at: string;
}

export const initialState: BorderState = {
  error: undefined,
  list: [],
  loading: false,
  updated_at: undefined
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
        loading: false,
        updated_at: action.payload.updated_at
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
