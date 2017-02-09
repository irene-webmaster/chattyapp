import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import Message from './Message.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: "Bob"},
      messages: []
    }
    this.socket = null;
    this.sendHandler = this.sendHandler.bind(this);
    this.sendNameHandler = this.sendNameHandler.bind(this);
  }

  componentDidMount() {

    const socket = new WebSocket('ws://localhost:4000');
    this.socket = socket;

    socket.onopen = (event) => {
      console.log("Connected to the websocket server");
    }

    socket.onmessage = (event) => {
      console.log("Server said: ", event.data);
      const message = JSON.parse(event.data);
      console.log('message ', message)

      switch(message.type) {
        case "incomingMessage":
          const messages = this.state.messages.concat(message);
          this.setState({messages: messages})
          break;
        // case "incomingNotification":
        //   // handle incoming notification function
        //   break;
        default:
          // show an error in the console if the message type is unknown
          throw new Error("Unknown event type " + message.type);
      }
    }
  }

  sendHandler(text, user) {
    this.socket.send(JSON.stringify({content: text, username: user, type: "postMessage"}))
  }

  sendNameHandler(oldname, newname) {
    this.socket.send(JSON.stringify({oldname: oldname, newname: newname, type: "postNotification"}))
  }

  render() {
    return (
      <div>
        <MessageList messageList = { this.state.messages } />
        <ChatBar currentUser = { this.state.currentUser } sendHandler = { this.sendHandler } />
      </div>
    );
  }
}
export default App;
