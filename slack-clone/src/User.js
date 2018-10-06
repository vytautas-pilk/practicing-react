import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user, onWindowChange, currentWindow }) => (
  <li className={`User ${currentWindow == user ? "active" : ""}`}>
    <button value={user} onClick={onWindowChange} 
      className={`User-button ${currentWindow == user ? "active" : ""}`}>
      {user}
    </button>
  </li>
);

User.propTypes = {
  user: PropTypes.string.isRequired,
  onWindowChange: PropTypes.func.isRequired,
  currentWindow: PropTypes.string.isRequired
};

export default User;