import { connect } from 'react-redux';
import IndexSideBar from './indexSideBar';
import { logout } from '../../actions/sessionActions';
import { getAllChannels } from '../../actions/channelActions';
import { getAlldirectMessages } from '../../actions/directMessageActions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    channels: state.entities.channels,
    directMessages: state.entities.directMessages,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchAllChannels: () => dispatch(getAllChannels()),
    fetchAllDirectMessages: (user) => dispatch(getAlldirectMessages(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexSideBar);