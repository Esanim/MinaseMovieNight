import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const movies = [
  {
    id: 'cory-house',
    title: 'Cory',
    year: 'House'
  },
  {
    id: 'scott-allen',
    title: 'Scott',
    year: 'Allen'
  },
  {
    id: 'dan-wahlin',
    title: 'Dan',
    year: 'Wahlin'
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (movie) => {
  return movie.title.toLowerCase() + '-' + movie.year.toLowerCase();
};

class MovieApi {
  static getAllMovies() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], movies));
      }, delay);
    });
  }

  static saveMovie(movie) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minMovieNameLength = 2;
        const minMovieYearLength = 4;
        if (movie.title.length < minMovieNameLength) {
          reject(`Title must be at least ${minMovieNameLength} characters.`);
        }

        if (movie.year.length < minMovieYearLength) {
          reject(`Year must be at least ${minMovieYearLength} characters.`);
        }

        if (movie.id) {
          const existingMovieIndex = movies.findIndex(a => a.id == movie.id);
          movies.splice(existingMovieIndex, 1, movie);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new authors in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          movie.id = generateId(movie);
          movies.push(movie);
        }

        resolve(Object.assign({}, movie));
      }, delay);
    });
  }

  static deleteMovie(movieId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfMovieToDelete = movies.findIndex(movie => {
          movie.movieId == movieId;
        });
        movies.splice(indexOfMovieToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default MovieApi;
