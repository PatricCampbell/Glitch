import * as MessageApiUtil from '../util/messagesApiUtil';

export const RECEIVE_ALL_MESSAGES = 'RECEIVE_ALL_MESSAGES';
export const RECEIVE_ONE_MESSAGE = 'RECEIVE_ONE_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

export const receiveAllMessages = messages => {
  return {
    type: RECEIVE_ALL_MESSAGES,
    messages,
  };
};

export const receiveOneMessage = message => {
  return {
    type: RECEIVE_ONE_MESSAGE,
    message,
  };
};

export const removeMessage = message => {
  return {
    type: REMOVE_MESSAGE,
    message,
  };
};

export const getAllMessages = (channelId) => dispatch => {
  return (
    MessageApiUtil.fetchAllMessages(channelId)
      .then(messages => dispatch(receiveAllMessages(messages)))
  );
};

export const sendMessage = message => dispatch => {
  return (
    MessageApiUtil.sendNewMessage(message)
      .then(message => dispatch(receiveOneMessage(message)))
  );
};

export const deleteMessage = message => dispatch => {
  return (
    MessageApiUtil.deleteMessage(message)
      .then(message => dispatch(removeMessage(message)))
  );
};
