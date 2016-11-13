import React, {PropTypes} from 'react';
import Post from './Post';

const PostGrid = ({posts, onChange}) => {
  return (
    <div className="table">
    <p>Posts</p>
    </div>
  );
};

PostGrid.propTypes = {
  posts: PropTypes.array.isRequired,
  onChange: React.PropTypes.func.isRequired
};

export default PostGrid;
