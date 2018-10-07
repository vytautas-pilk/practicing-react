import React from 'react';
import PropTypes from 'prop-types';
import './STYLES/ChannelsAndUsers.css';
import Channel from './Channel';
import User from './User';

function ChannelsAndUsers ({ channels, users, handleWindowChange,
  currentWindow, responsive }) {
  return (
    <div className={`Channels-Users ${responsive && "Responsive"}`}>
      <section className="Channels">
        <h1>CHANNELS</h1>
        <ul className="Channels-list">
          {Object.keys(channels).map(channel => (
            <Channel 
              key={channel} 
              currentWindow={currentWindow}
              channel={channel}
              onWindowChange={handleWindowChange}/>
          ))}
        </ul>
      </section>
      <section className="Users">
        <h1>USERS</h1>
        <ul className="Users-list">
          {users.map(user =>(
            <User 
              key={user}
              user={user}
              currentWindow={currentWindow}
              onWindowChange={handleWindowChange}/>
          ))}
        </ul>
      </section>
    </div>
  );
}

ChannelsAndUsers.propTypes = {
  channels: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
  handleWindowChange: PropTypes.func.isRequired,
  currentWindow: PropTypes.string.isRequired
};

export default ChannelsAndUsers;
