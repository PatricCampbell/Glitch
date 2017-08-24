import _ from 'lodash';
import { RECEIVE_ALL_MESSAGES,
  RECEIVE_ONE_MESSAGE,
  REMOVE_MESSAGE } from '../actions/messagesActions';

const messagesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_MESSAGES:
      const newState = {};
      action.messages.map(message => {
        newState[message.id]= message;
      });
      return newState;

    case RECEIVE_ONE_MESSAGE:
      const newMessage = { [action.message.id]: action.message };
      return Object.assign({}, state, newMessage);

    case REMOVE_MESSAGE:
      return _.omit(state, [action.id]);

    default:
      return state;
  }
};

export default messagesReducer;
