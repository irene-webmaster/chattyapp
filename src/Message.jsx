import React, {Component} from 'react';

class Message extends Component {
  render() {
    // console.log("Rendering <Message/>");
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name (Optional)" />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
      </footer>
    );
  }
}

export default Message;