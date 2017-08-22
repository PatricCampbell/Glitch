import React from 'react';
import { Route } from 'react-router-dom';
import GreetingContainer from './greetingContainer';
import SessionFormContainer from './SessionFormContainer';
import { AuthRoute } from '../util/routeUtil';
import Header from './header';

const App = () => {
  return (
    <div>
      <Route path='/' exact component={Header}/>

      <AuthRoute path='/login' component={SessionFormContainer} />
      <AuthRoute path='/signup' component={SessionFormContainer} />
    </div>
  );
};

export default App;
