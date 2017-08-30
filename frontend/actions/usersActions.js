import * as UsersApiUtil from '../util/usersApiUtil';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';

export const receiveAllUsers = users => {
  return {
    type: RECEIVE_ALL_USERS,
    users,
  };
};

export const getAllUsers = () => dispatch => {
  return (
    UsersApiUtil.fetchAllUsers()
      .then(users => dispatch(receiveAllUsers(users)))
  );
};