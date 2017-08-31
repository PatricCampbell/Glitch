import React from 'react';
import UserList from '../userList';

class DirectMessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllUsers();
  }

  handleClose(e) {
    this.props.handleCloseForm(e);
  }

  render() {
    return (
      <div className='modal'>
        <form className='dm-form'>
          <h3>Direct Messages</h3>
          <input type='text'>
          </input>  
          <UserList
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