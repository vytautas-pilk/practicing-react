import React from 'react';
import PropTypes from 'prop-types';

const Channel = ({ channel, onWindowChange, currentWindow }) => (
  <li className={`Channel ${currentWindow == channel ? "active" : ""}`}>
    <button value={channel} onClick={onWindowChange}
      className={`Channel-button ${currentWindow == channel ? "active" : ""}`}>
      # {channel}
    </button>
  </li>
);

Channel.propTypes = {
    channel: PropTypes.string.isRequired,
    onWindowChange: PropTypes.func.isRequired,
    currentWindow: PropTypes.string.isRequired
};

export default Channel;