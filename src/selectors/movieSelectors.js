import { createSelector } from 'reselect';


export function getMovies(state) {
  return state.tasks;
}

export function getMoviesList(state) {
  return getMovies(state).list;
}

export function getMoviesFilter(state) {
  return getMovies(state).filter;
}

export function getDeletedMovie(state) {
  return getMovies(state).deleted;
}


//=====================================
//  MEMOIZED SELECTORS
//-------------------------------------

export const getVisibleTasks = createSelector(
  getMoviesList,
  getMoviesFilter,
  (movies, filter) => {
    switch (filter) {
      case 'active':
        return movies.filter(movie => !movie.completed);

      case 'completed':
        return movies.filter(movie => movie.completed);

      default:
        return movies;
    }
  }
);
