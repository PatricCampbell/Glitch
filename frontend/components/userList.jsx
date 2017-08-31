import React from 'react';
import UserListItem from './userListItem';

const UserList = props => {
  const users = Object.values(props.users).map(user => {
    return (
      <UserListItem
    user = { user }
    key = { user.id }
      />
    );
  });

  return (
    <ul>
      {users}
    </ul>  
  );
};

export default UserList;