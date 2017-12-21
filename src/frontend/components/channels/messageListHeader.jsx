import React from "react";
import ChannelFormContainer from "../modals/channelFormContainer";

class MessageListHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      channel: null,
      formState: "hidden",
      formType: "edit"
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleCloseForm = this.handleCloseForm.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    let channel = null;

    if (nextProps.channels[nextProps.match.params.channel_id]) {
      channel = nextProps.channels[nextProps.match.params.channel_id];
    } else if (nextProps.directMessages[nextProps.match.params.channel_id]) {
      channel = nextProps.directMessages[nextProps.match.params.channel_id];
    }
    this.setState({
      channel: channel
    });
  }

  handleDelete(e) {
    this.props.deleteChannel(this.state.channel).then(() => {
      const firstChannelId = Object.keys(this.props.channels)[0];
      this.props.history.push(`/channels/${firstChannelId}`);
    });
  }

  handleEdit(e) {
    this.setState({
      formState: "shown"
    });
  }

  handleCloseForm(e) {
    this.setState({
      formState: "hidden"
    });
  }

  render() {
    if (this.state.channel) {
      return (
        <div className="message-list-header">
          <div className="message-list-header-info">
            <p className="bold">#{this.state.channel.name}</p>
            <p>{this.state.channel.description}</p>
          </div>
          <div className="message-list-header-buttons">
            {this.state.channel.creator_id === this.props.currentUser.id && (
              <div>
                <button onClick={this.handleEdit}>Edit</button>
                <button onClick={this.handleDelete}>Delete</button>
              </div>
            )}
          </div>
          <div className={this.state.formState === "shown" ? "fixed" : null}>
            {this.state.formState === "shown" ? (
              <ChannelFormContainer
                formType={this.state.formType}
                handleCloseForm={this.handleCloseForm}
                channel={this.state.channel}
              />
            ) : null}
          </div>
        </div>
      );
    } else {
      return <div className="message-list-header" />;
    }
  }
}

export default MessageListHeader;
