import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as movieActions from '../../actions/movieActions';
import {browserHistory} from 'react-router';
import toastr from 'toastr';
import Movie from './Movie';
import PaginationAdvanced from '../misc/PaginationAdvanced';
import {withRouter} from 'react-router';


class MovieList extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      pageIndex: 1,
      maxButtons: 4,
      films:[]
    };


    this.filterMoviesForPagination = this.filterMoviesForPagination.bind(this);
  }

  componentWillUpdate() {
    window.scrollTo(0, 200);
    // console.log('comp will upd');
    // console.log(window.pageYOffset);
    // console.log(window.scrollY);
  }

  componentDidUpdate() {
  }

  componentDidMount() {
    // console.log('componentDidMount');
    this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave.bind(this));

     console.log(window.pageYOffset);
     console.log(window.scrollY);
  }

 routerWillLeave(nextLocation) {
  //  console.log('router wwill leave');
  //  console.log(nextLocation);
  //
  //  let path = nextLocation.pathname.replace('/movies', "");
  //  if (!path){
  //    console.log('FITLER MOVIES router wwill elave');
  //    this.props.actions.filterMovies("");
  // }
 }

// handles updated page count
// updatePageCount(e) {
//     this.setState({ pageCount: e.target.value });
// }

  // handles changes from pagination
  updatePageIndex (index) {
      this.setState({ films: []});
      this.setState({ pageIndex: index });
  }

  returnStartingIndex() {
    return (10 * (this.state.pageIndex - 1)) ;
  }

  returnEnding() {
    let tempIndex = this.returnStartingIndex() + 10;
    return tempIndex > this.props.movies.length ? this.props.movies.length : tempIndex;
  }

  filterMoviesForPagination() {
    console.log('this is filterMoviesForPagination');
    this.state.films = [];
    for (var i = this.returnStartingIndex(); i < this.returnEnding(); i++) {
      this.state.films.push(this.props.movies[i]);
    }
  }

  onEnter(scroll) {
    // console.log('this is on enter');
    // console.log(window.pageYOffset);
    // console.log(window.scrollY);
    // console.log(scroll);
  }

  render() {
    const {movies} = this.props;

    if (this.props.processed) {

    this.filterMoviesForPagination();
    return (
      <div>
        <div className="control-butns">
          <p>Movie Results: {this.props.movies.length} </p>
          <button onClick={() => this.ontest()}> test </button>
        </div>

          {this.state.films.map((movie, i) =>
          <Movie movie={movie} key={i} />
          )}

        <div className="inner"   id="inner">
        <PaginationAdvanced itemCount={Math.ceil(this.props.movies.length/10)} maxButtons={this.state.maxButtons} activePage={this.state.pageIndex}
          onSelect={this.updatePageIndex.bind(this)}  />
        </div>
      </div>
    );
  } else return (<div></div>);
  }
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

MovieList.contextTypes = {
  router: PropTypes.object
};


function mapStateToProps(state, ownProps) {

//console.log('mpts');
//  console.log(state);
  //console.log(ownProps);
  let filteredMovies = null;
  if (state.movies.filterValue != undefined){
    console.log('filter = ' + state.movies.filterValue);
    filteredMovies = [...state.movies.moviesList.filter(movie=> !movie.title.toLowerCase().indexOf(state.movies.filterValue.toLowerCase()))];
    console.log(filteredMovies);
    // filteredMovies: [...state.movies.moviesList.filter(movie=> !movie.title.toLowerCase().indexOf(state.movies.filterValue.toLowerCase()))];
    // console.log(filteredMovies);
  }

  return {
    movies: filteredMovies || state.movies.moviesList,
    processed : state.movies.processed
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(movieActions, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieList));
