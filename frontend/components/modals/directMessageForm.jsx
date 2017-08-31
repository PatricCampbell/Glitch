import React from 'react';
import UserList from '../userList';

class DirectMessageForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      usersToMessage: [this.props.currentUser.id],
    };
    
    this.handleClose = this.handleClose.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleDeselect = this.handleDeselect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllUsers();
  }

  handleSelect(user) {
    const newUsersToMessage = this.state.usersToMessage;
    if (!newUsersToMessage.includes(user.id)) {
      newUsersToMessage.push(user.id);
      this.setState({
        usersToMessage: newUsersToMessage,
      });
    }
  }

  handleDeselect(user) {
    const newUsersToMessage = this.state.usersToMessage;
    if (newUsersToMessage.includes(user.id)) {
      const index = newUsersToMessage.indexOf(user.id);
      newUsersToMessage.splice(index, 1);
      this.setState({
        usersToMessage: newUsersToMessage,
      });
    }
  }

  handleClose(e) {
    this.setState({
      usersToMessage: [this.props.currentUser.id],
    });
    this.props.handleCloseForm(e);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createDirectMessage(this.state.usersToMessage)
      .then(directMessage => {
        this.handleClose(e);
        this.props.history.push(`/channels/${directMessage.directMessage.id}`);
      });
  }

  render() {
    return (
      <div className='modal'>
        <form className='dm-form' onSubmit={this.handleSubmit}>
          <h3>Direct Messages</h3>
          {/* <input type='text' placeholder='Find or Start a Conversation'>
          </input>   */}
          <UserList
            handleSelect={this.handleSelect}  
            handleDeselect={this.handleDeselect}  
            users={this.props.users}
            currentUser={this.props.currentUser}
            className='dm-user-list'
          />
          <div className='btn-area'>
            {this.state.usersToMessage.length > 1 ? <button className='submit-btn' type='submit'>
              Send Message
            </button> : null }
            <button className='danger-btn' onClick={this.handleClose} >
              Cancel
            </button>
          </div>
        </form>  
      </div>
    )
  }
}

export default DirectMessageForm;