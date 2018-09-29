import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';
import './PostList.css';

function PostList({ posts, vote }) {
  return (
    <div className="PostPage">
      {posts.map((post, index) => 
        <Post
          key={post.id}
          index={index}
          vote={vote}
          post={ post }/>
      )}
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
  vote: PropTypes.func.isRequired
};

export default PostList;