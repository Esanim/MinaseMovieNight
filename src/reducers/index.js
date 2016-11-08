import {combineReducers} from 'redux';
import movies from './movieReducer';
import userReducer from './userReducer';
import posts from './postReducer';
import auth from './authReducer';
import contactReducer from './contactReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  auth,
  movies,
  userReducer,
  posts,
  contactReducer,
  ajaxCallsInProgress
});

export default rootReducer;
