import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.currentUser.name,
      message: ''
    }

    this.handleMesChange = this.handleMesChange.bind(this);
    this.handleMesKeyPress = this.handleMesKeyPress.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleChangedName = this.handleChangedName.bind(this);
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

  handleMesKeyPress (event) {
    if(event.key == 'Enter') {
      // if(this.state.name == "") {
      //   this.state.name = this.props.currentUser.name
      // }
      this.props.sendHandler(this.state.message, this.state.name);
    }
  }

  handleChangedName (event) {
    this.props.sendNameHandler(this.props.currentUser.name, this.state.name)
  }

  render() {
    return (
      <footer className="chatbar">
        <input
          type = "text"
          className = "chatbar-username"
          placeholder = "Your Name (Optional)"
          onChange = {this.handleNameChange}
          onBlur = {this.handleChangedName }
          value = {this.state.name}
        />
        <input
          type="text"
          className = "chatbar-message"
          placeholder = "Type a message and hit ENTER"
          onChange = {this.handleMesChange}
          onKeyPress = {this.handleMesKeyPress}
        />
      </footer>
    );
  }
}

export default ChatBar;
