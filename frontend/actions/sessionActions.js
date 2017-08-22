import * as SessionApiUtil from '../util/sessionApiUtil';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser,
  };
};

export const receieveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors,
  };
};

export const signup = user => dispatch => {
  return (
    SessionApiUtil.signup(user)
      .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
      errors => dispatch(receieveErrors(errors.responseJSON)))
  );
};

export const login = user => dispatch => {
  return (
    SessionApiUtil.login(user)
      .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
      errors => dispatch(receieveErrors(errors.responseJSON)))
  );
};

export const logout = () => dispatch => {
  return (
    SessionApiUtil.logout()
      .then(() => dispatch(receiveCurrentUser(null)),
      errors => dispatch(receieveErrors(errors.responseJSON)))
  );
};
