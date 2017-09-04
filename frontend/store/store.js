import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  const createLogger = require('redux-logger');
  middlewares.push(createLogger());
}

const configureStore = (preloadedState = {}) => (
  createStore(RootReducer, preloadedState, applyMiddleware(...middlewares))
);

export default configureStore;
