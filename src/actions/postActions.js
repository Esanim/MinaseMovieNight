import PostApi from '../api/mockPostApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadPostsSuccess(posts) {
  return {type: types.LOAD_POSTS_SUCCESS, posts};
}

export function postSuccess(post) {
  return {
    type: types.POST_SUCCESS,
    post
  };
}

export function loadPosts() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return PostApi.getAllPosts().then(posts => {
      dispatch(loadPostsSuccess(posts));
    }).catch(error => {
      throw(error);
    });
  };
}
