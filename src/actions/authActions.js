import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';
import {browserHistory} from 'react-router';
import {firebaseApp as Firebase} from '../services/firebase/index';

export function signUpUser(credentials) {
  return function(dispatch) {
    Firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then(response => {
        dispatch(authUser());
        browserHistory.push('/movies');
      })
      .catch(error => {
        console.log('error in sinupuser');
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
        console.log(error);
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
      console.log(error);
      dispatch(authError(error));
    });
  }
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
