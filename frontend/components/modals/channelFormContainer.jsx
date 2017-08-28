import React from 'react';
import { connect } from 'react-redux';
import ChannelForm from './channelForm';
import { createChannel, editChannel } from '../../actions/channelActions';

const mapStateToProps = (state, ownProps) => {
  return {
    formType: ownProps.formType,
    channel: ownProps.channel,
    currentUser: state.currentUser,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: ownProps.formType === 'create' ? channel => dispatch(createChannel(channel)) : channel => dispatch(editChannel(channel)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelForm);