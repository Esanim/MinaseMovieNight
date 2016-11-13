import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as postActions from '../../actions/postActions';
import * as movieActions from '../../actions/movieActions';
import PostGrid from './PostsGrid';
import {browserHistory} from 'react-router';
import toastr from 'toastr';
import {Button}  from 'react-bootstrap';
import {Movie} from '../../data/movie';
import {moviesData} from '../../data/moviesData';

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      posts: Object.assign({}, props.posts),
      errors: {}
    };
  }

  postRow(post, index) {
    return <div key={index}>{post.title}</div>;
  }

  updatePostsState(event) {
    const field = event.target.name;
    let post = this.state.posts;
  }

  AddMovies() {
    let index;
    let m  = new Movie({title: 'Pass Thru', year: '2016', links: { 1 : 'firstlink', 2 : 'second' }});
    for (index = 0; index < moviesData.length; ++index) {
         this.props.mov.createMovie(moviesData[index]);
    }
    //this.props.mov.createMovie(moviesData[0]);
  }

  LogAllMovies()
  {
    this.props.mov.loadMovies();
  }

  render() {
    const {posts} = this.props;
    return (
      <div>
        <Button onClick={() => this.AddMovies()}>Add Movies</Button>
        <Button onClick={() => this.LogAllMovies()}>List Movies</Button>
        <PostGrid posts={posts} onChange={this.updatePostsState} />
      </div>
    );
  }
}

HomePage.propTypes = {
  posts: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
HomePage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    posts: state.posts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(postActions, dispatch),
    mov:bindActionCreators(movieActions,  dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
