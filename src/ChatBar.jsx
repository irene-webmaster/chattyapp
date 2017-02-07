import React, {Component} from 'react';

class ChatBar extends Component {
  render() {
    // console.log("Rendering <ChatBar/>");
    return (
      <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
      </nav>
    );
  }
}

export default ChatBar;
