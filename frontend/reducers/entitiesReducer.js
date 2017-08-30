import { combineReducers } from 'redux';
import MessagesReducer from './messagesReducer';
import ChannelsReducer from './channelsReducer';
import DirectMessagesReducer from './directMessagesReducer';

const entitiesReducer = combineReducers({
  messages: MessagesReducer,
  channels: ChannelsReducer,
  directMessages: DirectMessagesReducer,
});

export default entitiesReducer;
