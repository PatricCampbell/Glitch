import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login, signup } from './actions/sessionActions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#root');
  const store = configureStore();

  window.login = login;
  window.signup = signup;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(<Root store={store} />, root);
});
