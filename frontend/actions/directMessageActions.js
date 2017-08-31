import * as DirectMessageApiUtil from '../util/directMessagesApiUtil';

export const RECEIVE_ALL_DIRECT_MESSAGES = 'RECEIVE_ALL_DIRECT_MESSAGES';
export const RECEIVE_ONE_DIRECT_MESSAGE = 'RECEIVE_ONE_DIRECT_MESSAGE';

export const receiveAllDirectMessages = directMessages => {
  return {
    type: RECEIVE_ALL_DIRECT_MESSAGES,
    directMessages,
  };
};

export const receiveOneDirectMessage = directMessage => {
  return {
    type: RECEIVE_ONE_DIRECT_MESSAGE,
    directMessage,
  };
};

export const getAlldirectMessages = user => dispatch => {
  return (
    DirectMessageApiUtil.fetchAllDirectMessages(user)
      .then(directMessages => dispatch(receiveAllDirectMessages(directMessages)))
  );
};

export const createDirectMessage = userList => dispatch => {
  return (
    ChannelApiUtil.createChannel(userList)
      .then(directMessage => dispatch(receiveOneDirectMessage(directMessage)))
  );
};