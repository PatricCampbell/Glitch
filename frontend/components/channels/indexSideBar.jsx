import React from 'react';

const IndexSideBar = props => {
  
  const handleClick = e => {
    e.preventDefault();
    props.logout();
  };

  return (
    <div className='sidebar'>
      <h3>{props.currentUser.username}</h3>
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