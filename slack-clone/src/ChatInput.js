import React from 'react';
import PropTypes from 'prop-types';

function ChatInput({ handleNewMessage, handleInput, value }) {
  return (
    <form className="Message-Input" onSubmit={handleNewMessage}>
      <input name="message" value={value}
        placeholder="Type your message here. Press Enter to send"
        onChange={handleInput}/>
    </form>
  );
}

ChatInput.propTypes = {
  handleInput: PropTypes.func.isRequired,
  handleNewMessage: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default ChatInput;