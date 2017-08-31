import React from 'react';
import UserListItem from './userListItem';

const UserList = props => {
  const users = Object.values(props.users).map(user => {
    if (user.username !== props.currentUser.username) {
      return (
        <UserListItem
          handleSelect={props.handleSelect}
          handleDeselect={props.handleDeselect}
          user = { user }
          key = { user.id }
        />
      );
    }
  });

  return (
    <ul>
      {users}
    </ul>  
  );
};

export default UserList;