import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import Message from './Message.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: "Bob"},
      messages: [],
      counter: 0,
      color: ''
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
      // console.log("Server said: ", event.data);
      const serverData = JSON.parse(event.data);
      // console.log('serverData: ', serverData)

      switch(serverData.type) {
        case "incomingMessage":
          const messages = this.state.messages.concat(serverData);
          this.setState({messages: messages})
          break;
        case "incomingNotification":
          const notificationMessages = this.state.messages.concat(serverData);
          this.setState({messages: notificationMessages})
          break;
        case "user_connections":
          this.setState({counter: serverData.connections})
          break;
        case "user_color":
          this.setState({color: serverData.color})
          break;
        default:
          throw new Error("Unknown event type " + serverData);
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
        <MessageList messageList = { this.state.messages } counter = { this.state.counter } color = { this.state.color } />
        <ChatBar currentUser = { this.state.currentUser } sendHandler = { this.sendHandler } sendNameHandler = { this.sendNameHandler }  />
      </div>
    );
  }
}
export default App;
