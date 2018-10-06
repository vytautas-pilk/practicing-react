import React from 'react';

const Channel = ({ channel, onWindowChange, currentWindow }) => (
  <li className={`Channel ${currentWindow == channel ? "active" : ""}`}>
    <button value={channel} onClick={onWindowChange}
      className={`Channel-button ${currentWindow == channel ? "active" : ""}`}>
      # {channel}
    </button>
  </li>
);

export default Channel;