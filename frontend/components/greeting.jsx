import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = props => {
  if (props.currentUser === null) {
    return (
      <div>
        <Link to='/signup'>Signup</Link>
        <Link to='/login'>Login</Link>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Hello {props.currentUser.username}</h3>
        <button onClick={props.logout}>Logout</button>
      </div>
    );
  }
};

export default Greeting;