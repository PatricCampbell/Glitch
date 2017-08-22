import React from 'react';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  handleInput(field) {
    return e => {
      this.setState({
        [field]: e.currentTarget.value,
      });
    };
  }

  render() {

    const formType = this.props.formType === '/login' ? 'Log In' : 'Sign Up';

    

    return (
      <form onSubmit={this.handleSubmit}>
        <h3>
          {formType}
        </h3>
        <label>Username
          <input
            type='text'
            value={this.state.username}
            onChange={this.handleInput("username")}
          />
        </label>
        <label>Password
          <input
            type='password'
            value={this.state.password}
            onChange={this.handleInput('password')}
           />
        </label>
        <button type='submit'>{formType}
        </button>
      </form>
    );
  }
}

export default SessionForm;
