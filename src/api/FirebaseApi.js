import { FirebaseList } from '../services/firebase/index';
import * as movieActions from '../actions/movieActions';
import { Movie } from '../data/movie';
import { User } from '../data/user';
import { UserMovie } from '../data/userMovie';

export const moviesList = new FirebaseList({
  onAdd: movieActions.createMovieSuccess,
  onLoad: movieActions.loadMoviesSuccess
}, Movie, 'movies');

export const userList = new FirebaseList(
  null,  User, 'users');
