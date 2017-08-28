import React from 'react';
import ChannelFormModal from './channelFormModal';

const ModalConductor = props => {
  switch (props.currentModal) {

    case 'NEW_CHANNEL':
      return <ChannelFormModal {...props} />;  

    default:
      return null;  
  }
};

export default modalConductor;