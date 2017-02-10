import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Anonymous',
      message: ''
    }

    this.handleMesChange = this.handleMesChange.bind(this);
    this.handleMesKeyPress = this.handleMesKeyPress.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleChangedName = this.handleChangedName.bind(this);
  }

  handleNameChange(event) {
  }

  handleMesChange(event) {
    this.setState({
      message: event.target.value
    });
  }

  handleMesKeyPress (event) {
    if(event.key == 'Enter') {
      this.props.sendHandler(this.state.message, this.state.name);
      this.state.message = '';
    }
  }

  handleChangedName (event) {
    let oldname = this.state.name;
    let newname = event.target.value;

    if(oldname === '') oldname = 'Anonymous';
    if(newname === '') newname = 'Anonymous';

    if(oldname !== newname) {
      this.props.sendNameHandler(oldname, newname)
    }

    this.setState({
      name: newname
    });
  }

  render() {
    return (
      <footer className="chatbar">
        <input
          type = "text"
          className = "chatbar-username"
          placeholder = "Your Name (Optional)"
          onBlur = {this.handleChangedName }
        />
        <input
          type="text"
          className = "chatbar-message"
          placeholder = "Type a message and hit ENTER"
          onChange = {this.handleMesChange}
          onKeyPress = {this.handleMesKeyPress}
          value = {this.state.message}
        />
      </footer>
    );
  }
}

export default ChatBar;
