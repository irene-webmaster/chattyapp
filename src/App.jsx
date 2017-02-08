import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import Message from './Message.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      currentUser: {}
    }
    this.sendHandler = this.sendHandler.bind(this);
  }

  componentDidMount() {
    this.setState({
      currentUser: {
        name: "Bob"
      },
      messages: [
        {
          username: "Bob",
          content: "Has anyone seen my marbles?",
        },
        {
          username: "Anonymous",
          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
        }
      ]
    });

    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage)
      this.setState({messages: messages})
    }, 2000);
  }

  sendHandler(text, user) {
    const newMessage = {id: 4, username: user, content: text};
    const messages = this.state.messages.concat(newMessage)
    this.setState({messages: messages})
  }

  render() {
    return (
      <div>
        <MessageList messageList={this.state.messages} />
        <ChatBar currentUser={this.state.currentUser} sendHandler={this.sendHandler} />
      </div>
    );
  }
}
export default App;
