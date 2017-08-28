import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = props => {
  if (props.currentUser === null) {

    const handleDemo = e => {
      e.preventDefault();

      const formData = new FormData();
      formData.append('user[username]', 'demo');
      formData.append('user[password]', 'demopassword');
      props.login(formData);
    };

    return (
      <div>
        <Link to='/signup'>Signup</Link>
        <Link to='/login'>Login</Link>
        <button onClick={handleDemo}>Demo Account</button>
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
