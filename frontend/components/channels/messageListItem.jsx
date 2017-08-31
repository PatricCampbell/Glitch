import React from 'react';

class MessageListItem extends React.Component {
  constructor(props) {
    super(props);

    const { body, sentTime } = this.props.message;
    const jsSentTime = new Date(sentTime);
    const todaysDate = new Date();
  
    this.formattedSentTime = jsSentTime.toDateString() === todaysDate.toDateString() ? jsSentTime.toLocaleTimeString([],
      { hour: '2-digit', minute: '2-digit' }) : `${jsSentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} ${jsSentTime.toDateString()}`;
    
    this.state = {
      showDeleteBtn: false,
    };

    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseExit = this.mouseExit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  mouseEnter() {
    this.setState({
      showDeleteBtn: true,
    });
  }

  mouseExit() {
    this.setState({
      showDeleteBtn: false,
    });
  }

  handleDelete() {
    this.props.deleteMessage(this.props.message);
  }

  render() {
    const { body, sentTime } = this.props.message;
    const jsSentTime = new Date(sentTime);
    const todaysDate = new Date();
  
    const formattedSentTime = jsSentTime.toDateString() === todaysDate.toDateString() ? jsSentTime.toLocaleTimeString([],
      { hour: '2-digit', minute: '2-digit' }) : `${jsSentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} ${jsSentTime.toDateString()}`;

    return (
      <li
        className='message-item'
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseExit}
      >
        <div>
          <img src={`${this.props.message.author.avatar_url}`} width='36' height='36' />
        </div>
        <div className='message'>
          <span className='author-username bold'>
           {this.props.message.author.username}
           <span className='message-time'>
              {formattedSentTime}
           </span> 
          </span>
          <span className='message-body'>
            {this.props.message.body}
          </span>
        </div>
        {this.state.showDeleteBtn && this.props.currentUser.username === this.props.message.author.username ? <button
          onClick={this.handleDelete}
        >Delete</button> : null}
      </li>
    );
  }

};

export default MessageListItem;
