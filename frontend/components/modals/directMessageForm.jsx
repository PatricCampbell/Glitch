import React from 'react';
import UserList from '../userList';

class DirectMessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      usersToMessage: [],
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.handleDeselect = this.handleDeselect.bind(this);
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
      userToMessage: [],
    });
    this.props.handleCloseForm(e);
  }

  render() {
    return (
      <div className='modal'>
        <form className='dm-form'>
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
          <button className='danger-btn' onClick={this.handleClose} >
            Cancel
          </button>
        </form>  
      </div>
    )
  }
}

export default DirectMessageForm;