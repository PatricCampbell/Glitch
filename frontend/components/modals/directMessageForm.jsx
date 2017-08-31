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
        <UserList users={this.props.users} />
        <button className='danger-btn' onClick={this.handleClose} >
          Cancel
        </button>
      </div>
    )
  }
}

export default DirectMessageForm;