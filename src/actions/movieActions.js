import MovieApi from '../api/mockMovieApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';
import { getDeletedMovie } from '../selectors/movieSelectors';
import { moviesList } from '../api/FirebaseApi';

//export function loadMoviesSuccess(movies) {
//  return {type: types.LOAD_MOVIES_SUCCESS, movies};
//}

//export function loadMovies() {
//  return dispatch => {
    //dispatch(beginAjaxCall());
    //return MovieApi.getAllMovies().then(movies => {
//      dispatch(loadMoviesSuccess(movies));
  //  }).catch(error => {
    //  throw(error);
    //});
  //};
//}

export function createMovie(movie) {
  console.log('create movie action');
  console.log(movie);
  return dispatch => {
    moviesList.push({title: movie.title, year: movie.year, links: movie.links})
      .catch(error => dispatch(createMovieError(error)));
  };
}

export function createMovieError(erro1r) {
  return {
    type: types.CREATE_MOVIE_ERROR,
    payload: error
  };
}

export function createMovieSuccess(movie) {
  return {
    type: types.CREATE_MOVIE_SUCCESS,
    payload: movie
  };
}

export function loadMoviesSuccess(movies) {
  return {
    type: types.LOAD_MOVIES_SUCCESS,
    payload: movies
  };
}

export function filterMovies(filterType) {
  return {
    type: types.FILTER_MOVIES,
    payload: {filterType}
  };
}

export function loadMovies() {
  return (dispatch, getState) => {
    const { auth } = getState();
    moviesList.path = `movies/${auth.id}`;
    moviesList.subscribe(dispatch);
  };
}

export function unloadMovies() {
  moviesList.unsubscribe();
  return {
    type: types.UNLOAD_MOVIES_SUCCESS
  };
}
