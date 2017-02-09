import React, {Component} from 'react';

class Message extends Component {
  render() {
    this.props.messageList.map((msg, i) => {
      if (msg.type == "incomingMessage") {
        return (
          <div className="message">
            <span className="message-username">{ msg.username }</span>
            <span className="message-content">{ msg.content }</span>
          </div>
        )
      } else {
        return (
          <div class="message system">
            {msg.oldname} changed their name to {msg.newname}.
          </div>
        )
      }
      // return (<Message username={ msg.username } content={ msg.content } key={ msg.id } />)
      // return (<Message msg={msg} />)
    })
  }
}

export default Message;