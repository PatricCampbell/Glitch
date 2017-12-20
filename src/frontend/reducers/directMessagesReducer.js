import _ from 'lodash';
import {
  RECEIVE_ALL_DIRECT_MESSAGES,
  RECEIVE_ONE_DIRECT_MESSAGE,
} from '../actions/directMessageActions';

const directMessagesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_DIRECT_MESSAGES:
      const newState = {};
      action.directMessages.map(directMessage => {
        newState[directMessage.id] = directMessage;
      });
      return newState;

    case RECEIVE_ONE_DIRECT_MESSAGE:
      const newDirectMessage = { [action.directMessage.id]: action.directMessage };
      return Object.assign({}, state, newDirectMessage);

    default:
      return state;  
  }
}

export default directMessagesReducer;