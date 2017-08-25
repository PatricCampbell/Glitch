import React from 'react';

const IndexSideBar = props => {
  
  const handleClick = e => {
    e.preventDefault();
    props.logout();
  };

  return (
    <div className='sidebar'>
      <h3 className='username-display'>
        Hello, {props.currentUser.username}
      </h3>
      <button
        className='logout-btn'
        onClick={handleClick}
      >
        Logout
      </button>
    </div>
  );
};

export default IndexSideBar;