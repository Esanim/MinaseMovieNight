import * as types from '../actions/actionTypes';
import initialState from './initialState';
import { List, Record } from 'immutable';
import _values from 'lodash';

export default function movieReducer(state = initialState.movies, action) {
  switch (action.type) {
    case types.LOAD_MOVIES_SUCCESS:
    let test = _.values(action.payload)

    return Object.assign({}, state, { moviesList: test, filterValue: null, processed : true });

    case types.CREATE_MOVIE_SUCCESS:
      return state;

    case  types.CREATE_MOVIE_ERROR:
        return state;

    case  types.UNLOAD_MOVIES_SUCCESS:
      return state;

    case  types.FILTER_MOVIES:
  //   console.log('FILTER_MOVIES reducer');
  //     let filter = action.payload.filter;
  //     console.log(filter);
  //     let newstate = [...state.filter(movie => movie.id === 'theroom' || movie.id=== 'gymkata')];
  //     console.log(newstate);
  //       state.map(movie => console.log(movie.title));
  //
  //     return  [
  //   ...state.filter(movie => movie.title.toLowerCase().indexOf(filter.toLowerCase()) >=0 )
  // ];
  console.log(state);
  return Object.assign({}, state, { filterValue: action.payload.filter });

    default:
      return state;
  }
}
