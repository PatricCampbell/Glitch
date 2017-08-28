import { combineReducers } from 'redux';
import MessagesReducer from './messagesReducer';
import ChannelsReducer from './channelsReducer';

const entitiesReducer = combineReducers({
  messages: MessagesReducer,
  channels: ChannelsReducer,
});

export default entitiesReducer;
