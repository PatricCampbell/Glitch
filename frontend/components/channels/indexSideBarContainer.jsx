import { connect } from 'react-redux';
import IndexSideBar from './indexSideBar';
import { logout } from '../../actions/sessionActions';
import { getAllChannels } from '../../actions/channelActions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    channels: state.entities.channels,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchAllChannels: () => dispatch(getAllChannels()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexSideBar);