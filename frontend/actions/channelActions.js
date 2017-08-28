import * as ChannelApiUtil from '../util/channelsApiUtil';

export const RECEIVE_ALL_CHANNELS = 'RECEIVE_ALL_CHANNELS';
export const RECEIVE_ONE_CHANNEL = 'RECEIVE_ONE_CHANNEL';
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';

export const receiveAllChannels = channels => {
  return {
    type: RECEIVE_ALL_CHANNELS,
    channels,
  };
};

export const receiveOneChannel = channel => {
  return {
    type: RECEIVE_ONE_CHANNEL,
    channel,
  };
};

export const removeChannel = channel => {
  return {
    type: REMOVE_CHANNEL,
    channel,
  };
};

export const getAllChannels = () => dispatch => {
  return (
    ChannelApiUtil.fetchAllChannels()
      .then(channels => dispatch(receiveAllChannels(channels)))
  );
};

export const createChannel = channel => dispatch => {
  return (
    ChannelApiUtil.createChannel(channel)
      .then(channel => dispatch(receiveOneChannel(channel)))
  );
};

export const editChannel = channel => dispatch => {
  return (
    ChannelApiUtil.editChannel(channel)
      .then(channel => dispatch(receiveOneChannel(channel)))
  );
};

export const deleteChannel = channel => dispatch => {
  return (
    ChannelApiUtil.deleteChannel(channel)
      .then(channel => dispatch(removeChannel(channel)))
  );
};

