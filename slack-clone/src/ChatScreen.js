import React from 'react';
import Message from './Message';

function ChatScreen ({ currentWindow, channels, users }) {
  // The app needs two lists of messages: user messages and channel messages

  // Initialize variables: 
  let userMessages = channels.userMessages.map((message, index) =>
    <Message key={`message${index+1}`} message={message}>
      <span className="Message-channel">
        #{message.channel}
      </span>
    </Message>);

  let channelMessages = channels.channelMessages.map((message, index) =>
    <Message key={`message${index+1}`} message={message} />);

  return (
    // Conditional rendering either one of the lists or a "No messages" alert

    <div className="Chat-Screen">
      {users.includes(currentWindow) ? 
        userMessages :
        channels.channelMessages.length == 0 ?
        <p className="Channel-empty-alert">
          There are no messages in this channel yet.
        </p> :
        channelMessages
      }
    </div>
  );
}

export default ChatScreen;