import React from 'react';

const UserListItem = props => {
  return (
    <li>
      <img src={`${props.user.avatar}`} width='36' height='36' />
      <p>
        {props.user.username}
      </p>
    </li>
  );
};

export default UserListItem;