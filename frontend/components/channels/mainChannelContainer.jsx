import React from 'react';
import { connect } from 'react-redux';
import MainChannel from './mainChannel';

const mapStateToProps = state => {
  return {
    channels: state.entities.channels,
    directMessages: state.entities.directMessages,
  };
};

export default connect(mapStateToProps, null)(MainChannel);