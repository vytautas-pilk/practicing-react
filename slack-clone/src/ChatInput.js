import React from 'react';

function ChatInput({ handleNewMessage, handleInput, value }) {
  return (
    <form className="Message-Input" onSubmit={handleNewMessage}>
      <input name="message" value={value}
        placeholder="Type your message here. Press Enter to send"
        onChange={handleInput}/>
    </form>
  );
}

export default ChatInput;