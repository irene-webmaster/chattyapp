import React, {Component} from 'react';

class Message extends Component {
  render() {
    const style = {
      color: this.props.color
    }

    if (this.props.type == "incomingMessage") {
      return (
        <div className="message">
          <span className="message-username" style={style}>{ this.props.username }</span>
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