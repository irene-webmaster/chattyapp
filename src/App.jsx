import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import Message from './Message.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <ChatBar />
        <MessageList />
        <Message />
      </div>
    );
  }
}
export default App;
