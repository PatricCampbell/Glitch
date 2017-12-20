import React from 'react';
import { NavLink } from 'react-router-dom';

const ChannelsListItem = props => {
  return (
    <NavLink
      to={`/channels/${props.channel.id}`}
      activeClassName='selected-channel'
    >
      <li>
          # {props.channel.name}
      </li>  
    </NavLink>
  );
}

export default ChannelsListItem;