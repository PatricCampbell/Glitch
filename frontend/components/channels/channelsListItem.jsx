import React from 'react';
import { Link } from 'react-router-dom';

const ChannelsListItem = props => {
  return (
    <Link to={`/channels/${props.channel.id}`} >
      <li>  
          # {props.channel.name}
      </li>  
    </Link>
  );
}

export default ChannelsListItem;