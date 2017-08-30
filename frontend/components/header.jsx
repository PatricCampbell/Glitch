import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {

  const handleDemo = e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('user[username]', 'demo');
    formData.append('user[password]', 'demopassword');
    props.login(formData);
  };

  return (
    <header>
      <div className='header-left'>
        <Link to='/'><h3>Glitch</h3></Link>
      </div>  
      <div className='header-right'>
        <Link to='/signup' className='header-button'>Signup</Link>
        <Link to='/login' className='header-button'>Login</Link>
        <button onClick={handleDemo} className='header-button'>Demo Account</button>
      </div>  
    </header>
  );
  
};

export default Header;
