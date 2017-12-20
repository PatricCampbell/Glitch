import React from 'react';

class UserListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.state.selected) {
      this.setState({
        selected: false,
      },
      this.props.handleDeselect(this.props.user));
    } else {
      this.setState({
        selected: true,
      },
      this.props.handleSelect(this.props.user));
    }
  }

  render() {
    return (
      <li
        onClick={this.handleClick}
        className={this.state.selected ? 'dm-user-selected' : null}
      >
        <img src={`${this.props.user.avatar}`}
          width='36'
          className='avatar'
          height='36'
        />
        <p>
          {this.props.user.username}
        </p>
      </li>
    );
  }

};

export default UserListItem;
