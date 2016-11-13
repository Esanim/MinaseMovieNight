import * as types from '../actions/actionTypes';
import initialState from './initialState';
import { List, Record } from 'immutable';
import {_values} from 'lodash';

export default function movieReducer(state = initialState.movies, action) {
  switch (action.type) {
    case types.LOAD_MOVIES_SUCCESS:
    return Object.assign({}, state, { moviesList: _.values(action.payload), filterValue: null, processed : true });

    case types.CREATE_MOVIE_SUCCESS:
      return state;

    case  types.CREATE_MOVIE_ERROR:
        return state;

    case  types.UNLOAD_MOVIES_SUCCESS:
      return state;

    case  types.FILTER_MOVIES:
      return Object.assign({}, state, { filterValue: action.payload.filter });

    default:
      return state;
  }
}
