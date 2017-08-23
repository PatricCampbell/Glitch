import React from 'react';
import { Route } from 'react-router-dom';
import GreetingContainer from './greetingContainer';
import SessionFormContainer from './sessionFormContainer';
import { AuthRoute } from '../util/routeUtil';
import Header from './header';
import MainChannel from './channels/mainChannel';

const App = () => {
  return (
    <div>
      <Route path='(/|/login|/signup)' component={Header}/>

      <AuthRoute path='/login' component={SessionFormContainer} />
      <AuthRoute path='/signup' component={SessionFormContainer} />

      <Route path='/messages' component={MainChannel} />
    </div>
  );
};

export default App;
