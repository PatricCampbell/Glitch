import React from 'react';

const UserListItem = props => {
  return (
    <li>
      <p>
        {props.user.username}
      </p>
    </li>
  );
};

export default UserListItem;