import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as postActions from '../../actions/postActions';

const Post = ({post,  onChange}) => {
  return (
    <tr onChange={onChange}>
      <td><a href={post.watchHref} target="_blank">Watch</a></td>
      <td>posts.indexOf(post.id)</td>
      <td><Link to={'/post/' + post.id}>{post.title}</Link></td>
    </tr>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired
};

function getPostNo(posts, id) {
  let elementPos = posts.map(function(post) { return post.id;}).indexOf(id);
  let objectFound = posts[elementPos];
  return objectFound;
}

function mapStateToProps(state, ownProps) {
  return {
    posts: state.posts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(postActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
