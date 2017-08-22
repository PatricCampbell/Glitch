import React from 'react';
import { Route } from 'react-router-dom';
import GreetingContainer from './greetingContainer';
import SessionFormContainer from './SessionFormContainer';
import { AuthRoute } from '../util/routeUtil';

const App = () => {
  return (
    <div>
      <header>
        <h1>Welcome to Glitch</h1>
        <GreetingContainer />
      </header>

      <AuthRoute path='/login' component={SessionFormContainer} />
      <AuthRoute path='/signup' component={SessionFormContainer} />
    </div>
  );
};

export default App;
