import React from 'react';
import PropTypes from 'prop-types';
import PostVotingBox from './PostVotingBox';
import PostContent from './PostContent';
import './Post.css';

function Post({ index, post, vote }) {
  return (
    <div className="Post">
      <PostVotingBox
        index={index}
        vote={vote}
        post={post} />
      <PostContent post={post}/>
    </div>
  );
}

Post.propTypes = {
  index: PropTypes.number.isRequired,
  post: PropTypes.object.isRequired,
  vote: PropTypes.func.isRequired
};

export default Post;