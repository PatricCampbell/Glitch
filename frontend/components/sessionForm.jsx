import React from 'react';
import ErrorArea from './errorArea';
import { Link } from 'react-router-dom';

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
    const otherForm = this.props.formType === '/login' ? '/signup' : '/login';
    const otherFormType = this.props.formType === '/login' ? 'Sign Up' : 'Log In';

    return (
      <div className='form-container'>
        <ErrorArea errors={this.props.errors}/>
        <form
          className='session-form'
          onSubmit={this.handleSubmit}
        >
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
          <span className='full-width'>
            <Link to={otherForm} >{otherFormType} Instead</Link>
          </span>
        </form>
      </div>
    );
  }
}

export default SessionForm;
