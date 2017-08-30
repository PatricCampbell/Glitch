import _ from 'lodash';
import {
  RECEIVE_ALL_DIRECT_MESSAGES,
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

    default:
      return state;  
  }
}

export default directMessagesReducer;