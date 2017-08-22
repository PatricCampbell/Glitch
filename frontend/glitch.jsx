import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login, signup } from './actions/sessionActions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#root');

  // window.login = login;
  // window.signup = signup;
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  let store = configureStore();
  const currentUser = JSON.parse(window.localStorage.getItem('currentUser'));
  if (currentUser) {
    const preloadedState = { session: { currentUser }};
    store = configureStore(preloadedState);
    window.localStorage.removeItem('currentUser');
  }

  ReactDOM.render(<Root store={store} />, root);
});
