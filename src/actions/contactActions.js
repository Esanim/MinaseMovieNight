import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function sendEmail(data) {
  return dispatch => {
    dispatch(sendEmailSuccess());
  };
}

export function sendEmailError(error) {
  return {
    type: types.SEND_EMAIL_ERROR,
    payload: error
  };
}

export function sendEmailSuccess(data) {
  return {
    type: types.SEND_EMAIL_SUCCESS,
    payload: data
  };
}
