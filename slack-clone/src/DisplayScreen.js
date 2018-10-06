import React from 'react';
import './Display-Screen.css';
import ChatScreen from './ChatScreen';
import ChatInput from './ChatInput';

function DisplayScreen({ currentWindow, handleNewMessage, 
  handleInput, value, channels, users }) {

  return (
    <div className="Display-Screen">
      <ChatScreen currentWindow={currentWindow}
        channels={channels}
        users={users}
        />
      {!users.includes(currentWindow) &&
        <ChatInput
          value={value}
          handleInput={handleInput}
          handleNewMessage={handleNewMessage}
          /> ||
        <p className="Message-input-disabled">Messaging is currently disabled</p>
      }
    </div>
  );
}

export default DisplayScreen;
