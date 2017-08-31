import React from 'react';

class DirectMessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(e) {
    this.props.handleCloseForm(e);
  }

  render() {
    return (
      <div className='modal'>
        DM Form Goes Here
        <button className='danger-btn' onClick={this.handleClose} >
          Cancel
        </button>
      </div>
    )
  }
}

export default DirectMessageForm;