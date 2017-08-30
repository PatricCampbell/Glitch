import { combineReducers } from 'redux';
import MessagesReducer from './messagesReducer';
import ChannelsReducer from './channelsReducer';
import DirectMessagesReducer from './directMessagesReducer';
import UsersReducer from './usersReducer';

const entitiesReducer = combineReducers({
  messages: MessagesReducer,
  channels: ChannelsReducer,
  directMessages: DirectMessagesReducer,
  users: UsersReducer,
});

export default entitiesReducer;
