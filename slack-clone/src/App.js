import React from 'react';
import ChannelsAndUsers from './ChannelsAndUsers';
import DisplayScreen from './DisplayScreen';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWindow: "general",
      users: this.props.users,
      channelMessages: this.props.channelMessages,
      newMessage: ""
    }
    this.handleWindowChange = this.handleWindowChange.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleNewMessage = this.handleNewMessage.bind(this);
  }

  componentDidUpdate() {
    const chatScreen = document.querySelector(".Chat-Screen");
    chatScreen.scrollTop = chatScreen.scrollHeight;
  }

  handleInput(event) {
    // Stores input value for a new message
    this.setState({
      newMessage: event.target.value
    });
  }

  handleNewMessage(event) {
    // Constructs a new message and adds it to the array
    event.preventDefault()
    const currentWindow = this.state.currentWindow;
    const message = {
      channel: currentWindow,
      user: "Me",
      time: new Date().toLocaleString('lt-LT', {timeZone: 'Europe/Vilnius'}),
      message: this.state.newMessage
    };
    let messages = [...this.state.channelMessages[currentWindow], message];
    if (this.state.newMessage.length > 0) {
      this.setState({
        channelMessages: {...this.state.channelMessages, [currentWindow]: messages},
        newMessage: ""
      });
    }
  }

  handleWindowChange(event) {
    // Sets the correct channel/user window to display
    this.setState({
      currentWindow: event.target.value,
    });
  }

  renderMessages() {
    // Builds two different messages arrays: one for channel messages and one 
    // for user messages. They get displayed slightly different
    let channels = this.state.channelMessages;
    let currentWindow = this.state.currentWindow;
    let channelMessages = [];
    let userMessages = [];
    for (let channel in channels) {
      channelMessages.push(...channels[channel].filter(message =>
        message.channel == currentWindow));
      userMessages.push(...channels[channel].filter(message =>
        message.user == currentWindow));
    }
    return { channelMessages, userMessages };
  }

  render() {
    return (
      <main className="App">
        <ChannelsAndUsers 
          channels={this.state.channelMessages} 
          currentWindow={this.state.currentWindow}
          users={this.state.users}
          handleWindowChange={this.handleWindowChange}/>
        <DisplayScreen
          users={this.state.users}
          channels={this.renderMessages()}
          currentWindow={this.state.currentWindow}
          handleNewMessage={this.handleNewMessage}
          handleInput={this.handleInput}
          value={this.state.newMessage}/>
      </main>
    );
  }
}

export default App;
