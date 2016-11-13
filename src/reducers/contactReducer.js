import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function contactReducer(state = initialState, action) {
  switch (action.type) {
    case types.SEND_EMAIL_SUCCESS:
    console.log('send email success REDUCER');
    return state;

    case types.SEND_EMAIL_ERROR:
    console.log('send email error REDUCER');
      return state;

    default:
      return state;
  }
}
