import React from 'react';
import PropTypes from 'prop-types';

function Message({ message, children }) {
  return (
    <div className="Message">
      <div className="Message-author-avatar" />
      <div className="Message-preview">
        <div className="Message-details">
          <span className="Message-author">{message.user}</span>
          <span className="Message-date">{message.time}</span>
          {children}
        </div>
        <div className="Message-text">{message.message}</div>
      </div>
    </div>
  );
}

Message.propTypes = {
  message: PropTypes.object.isRequired,
  children: PropTypes.node
}

export default Message;