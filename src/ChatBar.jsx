import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.currentUser.name,
      message: ''
    }

    this.handleKeyPress   = this.handleKeyPress.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleMesChange  = this.handleMesChange.bind(this);
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

   handleMesChange(event) {
    this.setState({
      message: event.target.value
    });
  }

  handleKeyPress (event) {
    if(event.key == 'Enter') {
      this.props.sendHandler(this.state.message, this.state.name);
    }
  }

  render() {
    return (
      <footer className="chatbar">
        <input
          type="text"
          className="chatbar-username"
          placeholder="Your Name (Optional)"
          onChange={this.handleNameChange}
        />
        <input
          type="text"
          className="chatbar-message"
          placeholder="Type a message and hit ENTER"
          onChange={this.handleMesChange}
          onKeyPress={ this.handleKeyPress }
        />
      </footer>
    );
  }
}

export default ChatBar;
