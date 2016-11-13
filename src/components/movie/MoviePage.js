import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as movieActions from '../../actions/movieActions';
import {browserHistory} from 'react-router';
import toastr from 'toastr';
import Movie from './Movie';

class MoviePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {movie} = this.props;
    return (
      <div>
        <Movie movie={movie} />
        <h3>something else</h3>
      </div>
    );
  }
}

MoviePage.propTypes = {
  movie: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  const post = ownProps.movie || state.movies.moviesList.find(movie => movie.id === ownProps.params.movieId)

  return {
    movie: post
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(movieActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
