import React from 'react';
import ErrorArea from './errorArea';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      avatarFile: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  handleSubmit(e) {
    
    const formData = new FormData();
    formData.append('user[username]', this.state.username);
    formData.append('user[password]', this.state.password);
    if (this.state.avatarFile) {
      formData.append('user[avatar]', this.state.avatarFile);
    }
    
    this.props.processForm(formData);
  }

  handleInput(field) {
    return e => {
      this.setState({
        [field]: e.currentTarget.value,
      });
    };
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({
        avatarFile: file,
      });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render() {

    const formType = this.props.formType === '/login' ? 'Log In' : 'Sign Up';
    const otherForm = this.props.formType === '/login' ? '/signup' : '/login';
    const otherFormType = this.props.formType === '/login' ? 'Sign Up' : 'Log In';
    
    const avatarInput = () => {
      return (
        <label>Avatar Image
         <input type="file" onChange={this.updateFile} />
        </label>  
      );
    };

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
          {formType === 'Sign Up' ? avatarInput() : null}
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
