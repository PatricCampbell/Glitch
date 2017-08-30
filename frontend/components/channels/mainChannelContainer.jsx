import React from 'react';
import { connect } from 'react-redux';
import MainChannel from './mainChannel';

const mapStateToProps = state => {
  return {
    channels: state.entities.channels,
  };
};

export default connect(mapStateToProps, null)(MainChannel);