import { connect } from 'react-redux';
import IndexSideBar from './indexSideBar';
import { logout } from '../../actions/sessionActions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexSideBar);