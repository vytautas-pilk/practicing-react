import React from 'react';
import PropTypes from 'prop-types';
import './STYLES/Display-Screen.css';
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

DisplayScreen.propTypes = {
  currentWindow: PropTypes.string.isRequired,
  handleNewMessage: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,
  value: PropTypes.string,
  channels: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired
};

export default DisplayScreen;
