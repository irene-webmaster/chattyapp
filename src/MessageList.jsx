import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  render() {
    const msgComponents = this.props.messageList.map((msg, i) => {
      return (
        <Message
          username = {msg.username}
          content = {msg.content}
          oldname = {msg.oldname}
          newname = {msg.newname}
          type = {msg.type}
          key = { i }
        />
      )
    })
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
          <span>{this.props.counter} user(s) online</span>
        </nav>
        <main className="messages">
          { msgComponents }
        </main>
      </div>
    );
  }
}

export default MessageList;
