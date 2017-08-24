import { combineReducers } from 'redux';
import MessagesReducer from './messagesReducer';

const entitiesReducer = combineReducers({
  messages: MessagesReducer,
});

export default entitiesReducer;
