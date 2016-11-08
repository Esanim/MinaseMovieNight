import * as types from './actionTypes';

export function loadMoviesSuccess(movies) {
  return {type: types.LOAD_MOVIES_SUCCESS, movies};
}

export function loadMovies() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return MovieApi.getAllMovies().then(movies => {
      dispatch(loadMoviesSuccess(movies));
    }).catch(error => {
      throw(error);
    });
  };
}
