import React from 'react';
import { Route } from 'react-router-dom';
import GreetingContainer from './greetingContainer';
import SessionFormContainer from './SessionFormContainer';

const App = () => {
  return (
    <div>
      <header>
        <h1>Welcome to Glitch</h1>
        <GreetingContainer />
      </header>

      <Route path='/login' component={SessionFormContainer} />
      <Route path='/signup' component={SessionFormContainer} />
    </div>
  );
};

export default App;
