import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  render() {
    const msgComponents = this.props.messageList.map((msg, i) => {
      return (<Message username={ msg.username } content={ msg.content } key={ i } />)
    })

    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <main className="messages">
          { msgComponents }
        </main>
      </div>
    );
  }
}

export default MessageList;
