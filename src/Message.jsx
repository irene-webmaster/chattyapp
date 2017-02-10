import React, {Component} from 'react';

class Message extends Component {
  render() {
    console.log('12345', this.props);
    if (this.props.type == "incomingMessage") {
      return (
        <div className="message">
          <span className="message-username">{ this.props.username }</span>
          <span className="message-content">{ this.props.content }</span>
        </div>
      )
    } else {
      return (
        <div className="message system">
          {this.props.oldname} changed their name to {this.props.newname}.
        </div>
      )
    }
  }
}

export default Message;