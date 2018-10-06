import React from 'react';

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

export default Message;