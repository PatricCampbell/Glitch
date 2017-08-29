import React from 'react';
import { connect } from 'react-redux';
import ChannelForm from './channelForm';
import { createChannel, editChannel } from '../../actions/channelActions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    formType: ownProps.formType === 'create' ? 'Create' : 'Edit',
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: ownProps.formType === 'create' ? channel => dispatch(createChannel(channel)) : channel => dispatch(editChannel(channel)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelForm);