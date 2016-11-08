import * as types from '../actions/actionTypes';
import initialState from './initialState';
import { List, Record } from 'immutable';
import _values from 'lodash';

export default function movieReducer(state = initialState.movies, action) {
  switch (action.type) {
    case types.LOAD_MOVIES_SUCCESS:
    console.log('LOAD_MOVIES_SUCCESS');
    console.log(action);
    let test = _.values(action.payload)
    console.log(test);
    return test;

    case types.CREATE_MOVIE_SUCCESS:
    console.log(action.payload.message);
      return state;

    case  types.CREATE_MOVIE_ERROR:
      console.log(action.payload.message);
        return state;

    case  types.UNLOAD_MOVIES_SUCCESS:
    console.log(action.payload.message);
      return state;

    case  types.FILTER_MOVIES:
    console.log(action.payload.message);
      return state;

    default:
      return state;
  }
}
