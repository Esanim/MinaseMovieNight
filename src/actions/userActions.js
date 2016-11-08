import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadUsersSuccess(users) {
  return {type: types.LOAD_USERS_SUCCESS, users};
}
