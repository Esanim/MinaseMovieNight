import React, {PropTypes} from 'react';
import Post from './Post';

const PostGrid = ({posts, onChange}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>#</th>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th>Length</th>
      </tr>
      </thead>
      <tbody>
      {posts.map(post =>
        <Post key={post.id} post={post} onChange={onChange} />
      )}
      </tbody>
    </table>
  );
};

PostGrid.propTypes = {
  posts: PropTypes.array.isRequired,
  onChange: React.PropTypes.func.isRequired
};

export default PostGrid;
