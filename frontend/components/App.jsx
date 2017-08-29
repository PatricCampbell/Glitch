import React from 'react';
import { Route } from 'react-router-dom';
import GreetingContainer from './greetingContainer';
import SessionFormContainer from './sessionFormContainer';
import { AuthRoute, ProtectedRoute } from '../util/routeUtil';
import Header from './header';
import IndexSideBarContainer from './channels/indexSideBarContainer';
import MainChannel from './channels/mainChannel';

const App = () => {
  return (
    <div>
      <AuthRoute path='(/|/login|/signup)' component={Header}/>
 
      <AuthRoute path='/login' component={SessionFormContainer} />
      <AuthRoute path='/signup' component={SessionFormContainer} />
      
      <div className='index purplish'>
        <ProtectedRoute path='/channels/:channel_id' component={IndexSideBarContainer} />
        <ProtectedRoute path='/channels/:channel_id' component={MainChannel} />
      </div>
    </div>
  );
};

export default App;
