import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as movieActions from '../../actions/movieActions';
import {browserHistory} from 'react-router';
import toastr from 'toastr';
import Movie from './Movie';
import PaginationAdvanced from '../misc/PaginationAdvanced';

class MovieList extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {movies} = this.props;
    return (
      <div>
        <div className="control-butns">
          <p>Movie Results: {this.props.movies.length} </p>
        </div>
        {this.props.movies.map((movie, i) => <Movie movie={movie} key={i} />)}
        <div className="inner"   id="inner">
        <PaginationAdvanced />
        </div>
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    movies: state.movies
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(movieActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
