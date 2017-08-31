import React from 'react';
import { connect } from 'react-redux';
import DirectMessageForm from './directMessageForm';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
  };
};

export default connect(mapStateToProps, null)(DirectMessageForm);