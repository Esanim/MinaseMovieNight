import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function contactReducer(state = initialState, action) {
  switch (action.type) {
    case types.SEND_EMAIL_SUCCESS:
    return state;

    case types.SEND_EMAIL_ERROR:
      return state;

    default:
      return state;
  }
}
