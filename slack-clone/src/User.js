import React from 'react';

const User = ({ user, onWindowChange, currentWindow }) => (
  <li className={`User ${currentWindow == user ? "active" : ""}`}>
    <button value={user} onClick={onWindowChange} 
      className={`User-button ${currentWindow == user ? "active" : ""}`}>
      {user}
    </button>
  </li>
);

export default User;