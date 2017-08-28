import React from 'react';
import ErrorArea from '../errorArea';

class ChannelForm extends React.Component {
  constuctor(props) {
    super(props);

    if (this.props.channel === null) {
      this.state = {
        name: '',
        description: '',
        creator_id: this.props.currentUser.id,
      };
    } else {
      this.state = {
        name: this.props.channel.name,
        description: this.props.channel.description,
        creator_id: this.props.channel.creator_id,
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.processForm(this.state);
  }

  handleInput(field) {
    return e => {
      this.setState({
        [field]: e.currentTarget.value,
      });
    };
  }

  render() {
    return (
      <div classNAme='form-container'>
        <ErrorArea errors={this.props.errors} />
        <form onSubmit={this.handleSubmit} >
          <h3>
            {formType}
          </h3>
          <label>Channel Name
            <input
              type='text'
              value={this.state.name}
              onChange={this.handleInput('name')}
            />
          </label>
          <label>Description
            <input
              type='text'
              value={this.state.description}
              onChange={this.handleInput('description')}
            />
          </label>
        </form>
      </div>  
    );
  }
}