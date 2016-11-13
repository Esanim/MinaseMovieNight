import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';
import {browserHistory} from 'react-router';
import {firebaseApp as Firebase} from '../services/firebase/index';
import store from '../index.js';
import {loadMovies} from './movieActions';
import {loadPosts} from './postActions';

export function signUpUser(credentials) {
  return function(dispatch) {
    Firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then(response => {
        dispatch(authUser());
        browserHistory.push('/movies');
      })
      .catch(error => {
        /* eslint-disable no-console */
        console.log('error in sinupuser');
        /* eslint-enable no-console */
        dispatch(authError(error));
      });
  };
}

export function signInUser(credentials) {
  return function(dispatch) {
    Firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(response => {
        dispatch(authUser());
        browserHistory.push('/movies');
      })
      .catch(error => {
        /* eslint-disable no-console */
        console.log(error);
        /* eslint-enable no-console */
        dispatch(authError(error));
      });
  };
}

export function signOutUser()
{
  return function(dispatch) {
    Firebase.auth().signOut()
    .then(response => {
      dispatch(signedOut());
      browserHistory.push('/');
    })
    .catch(error =>
    {
      /* eslint-disable no-console */
      console.log(error);
      /* eslint-enable no-console */
      dispatch(authError(error));
    });
  };
}

export function signedOut()
{
  return {
    type: types.SIGNED_OUT
  };
}

export function verifyAuth() {
  return function (dispatch) {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(authUser());
      } else {
        dispatch(signOutUser());
      }
    });
  };
}

export function authUser() {
  store.dispatch(loadPosts());
  store.dispatch(loadMovies());
  return {
    type: types.AUTH_USER
  };
}

export function authError(error) {
  return {
    type: types.AUTH_ERROR,
    payload: error
  };
}

export function cleanError(error) {
  return {
    type: types.CLEAN_ERROR
  };
}
