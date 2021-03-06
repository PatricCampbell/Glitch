import _ from 'lodash';
import {
  RECEIVE_ALL_CHANNELS,
  RECEIVE_ONE_CHANNEL,
  REMOVE_CHANNEL
} from '../actions/channelActions';

const channelsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_CHANNELS:
      const newState = {};
      action.channels.map(channel => {
        newState[channel.id] = channel;
      });
      return newState;

    case RECEIVE_ONE_CHANNEL:
      const newChannel = { [action.channel.id]: action.channel };
      return Object.assign({}, state, newChannel);

    case REMOVE_CHANNEL:
      return _.omit(state, [action.channel.id])  

    default:
      return state;  
  }
}

export default channelsReducer;