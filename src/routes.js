import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/home/HomePage';
import MoviesPage from './components/movie/MovieList';
import MoviePage from './components/movie/MoviePage';
import UsersPage from './components/users/UsersList';
import User from './components/users/User';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import RequireAuth from './components/auth/RequireAuth';
import ContactPage from './components/misc/ContactPage';
import TermsOfUse from './components/misc/TermsOfUse';

export default (
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />

      <Route path="movies" >
        <IndexRoute component={RequireAuth(MoviesPage)} />
        <Route path="q=:x" component={RequireAuth(MoviesPage)} />
        <Route path=":movieId" component={RequireAuth(MoviePage)} />
      </Route>

      <Route path="users" component={RequireAuth(UsersPage)} >
        <Route path=":userId" component={RequireAuth(User)} >
          <Route path="mymovies"  component={ContactPage}  />
          <Route path="watchlist"   component={ContactPage}  />
          <Route path="settings"   component={ContactPage} />
        </Route>
      </Route>

      <Route path="login" component={Login} />
      <Route path="register" component={Register} />

      <Route path="terms" component={TermsOfUse} />
      <Route path="contact" component={ContactPage} />

    </Route>
);
