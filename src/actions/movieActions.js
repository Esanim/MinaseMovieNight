import MovieApi from '../api/mockMovieApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';
import { getDeletedMovie } from '../selectors/movieSelectors';
import { moviesList } from '../api/FirebaseApi';
import axios from 'axios';
import {browserHistory} from 'react-router';

export function filterMovies(filter) {
  //browserHistory.push('movies/q=' + filter);
    return {
      type: types.FILTER_MOVIES,
      payload: {filter}
    };
}

export function createMovie(movie) {
  return dispatch => {
    moviesList.push(movie)
      .catch(error => dispatch(createMovieError(error)));
  };
}

export function createMovieError(error) {
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

export function loadMovies() {
  return (dispatch, getState) => {
    const { auth } = getState();
    //moviesList.path = `movies/${auth.id}`;
    moviesList.path = 'movies/';
    moviesList.subscribe(dispatch);
  };
}

export function unloadMovies() {
  moviesList.unsubscribe();
  return {
    type: types.UNLOAD_MOVIES_SUCCESS
  };
}
