import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' }
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleKeyPress (event) {
    if(event.key == 'Enter') {
      this.props.sendHandler(event.target.value, this.props.currentUser.name);
      /*this.setState({ value: this.state});*/
    }
  }

  render() {
    return (
      <footer className="chatbar">
        <input type="text" className="chatbar-username" placeholder="Your Name (Optional)" value={ this.props.currentUser.name } />
        <input type="text" className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress={ this.handleKeyPress } />
      </footer>
    );
  }
}

export default ChatBar;
