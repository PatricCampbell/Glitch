import React from 'react';
import { connect } from 'react-redux';
import ChannelForm from './channelForm';
import { createChannel, editChannel } from '../actions/channelActions';

const mapStateToProps = (state, ownProps) => {

};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelForm);