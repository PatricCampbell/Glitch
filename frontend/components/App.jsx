import React from 'react';
import { Route } from 'react-router-dom';
import GreetingContainer from './greetingContainer';
import SessionFormContainer from './sessionFormContainer';
import { AuthRoute } from '../util/routeUtil';
import Header from './header';

const App = () => {
  return (
    <div>
      <Route path='(/|/login|/signup)' component={Header}/>

      <AuthRoute path='/login' component={SessionFormContainer} />
      <AuthRoute path='/signup' component={SessionFormContainer} />
    </div>
  );
};

export default App;
