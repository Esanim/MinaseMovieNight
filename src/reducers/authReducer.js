import { AUTH_USER, SIGNED_OUT, AUTH_ERROR, CLEAN_ERROR } from '../actions/actionTypes';
import initialState from './initialState';

export default function authReducer(state = initialState.auth, action) {
  switch (action.type) {
    case AUTH_USER:
      return Object.assign({}, state, { authenticated: true, error: null, processed: true });
    case SIGNED_OUT:
      return Object.assign({}, state, { authenticated: false, error: null, processed: true });
    case AUTH_ERROR:
      return Object.assign({}, state, {processed: true, error: action.payload.message });
    case CLEAN_ERROR:
      return Object.assign({}, state, {error: null });
    default:
      return state;
  }
}
