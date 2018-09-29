import React from 'react';
import PropTypes from 'prop-types';

function PostContent({ post }) {
  return (
    <div className="Post-content">
      <div className="Post-picture" />
      <div className="Post-details">
        <div className="Post-title">
          <span>
            <h2 className="Post-header">
              <a href={post.post_url}>{post.title}</a>
            </h2>
            <a className="Post-source" href={post.website}>{post.website}</a>
          </span>
        </div>
        <div className="Post-info">
          <span className="Post-subreddit">r/ReactJS</span>
          <span>Posted by {post.author} 3 hours ago</span>
        </div>
        <div className="Post-actions">
          <span>{post.comments} {`Comment${post.comments == 0 ? "" : "s"}`}</span>
          <span>Share</span>
          <span>Save</span>
          <span>Hide</span>
          <span>Report</span>
        </div>
      </div>
    </div> 
  );
}

PostContent.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostContent;