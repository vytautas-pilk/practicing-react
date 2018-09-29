import React from 'react';
import PropTypes from 'prop-types';

function PostVotingBox({ index, post, vote }) {
  return (
    <div className="Post-voting">
      <div className="Post-vote">
        <button 
          className="Post-upvote"
          aria-label="upvote"
          onClick={() => vote(index, true)}
          >
          &uarr;
        </button>
      </div>
      <div className="Post-upvotes">{post.votes}</div>
      <div className="Post-vote">
        <button className="Post-downvote" 
          aria-label="downvote"
          onClick={() => vote(index, false)}
          >
          &darr;
        </button>
      </div>
    </div>
  );
}

PostVotingBox.propTypes = {
  index: PropTypes.number.isRequired,
  post: PropTypes.object.isRequired,
  vote: PropTypes.func.isRequired
};

export default PostVotingBox;