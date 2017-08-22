import React from 'react';
import GreetingContainer from './greetingContainer';

export const Header = props => {
  return (
    <header>
      <h1>Glitch</h1>
      <GreetingContainer />
    </header>
  );
};

export default Header;
