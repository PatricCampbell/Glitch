import { RECEIVE_ALL_USERS } from '../actions/usersActions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_USERS:
      return Object.assign({}, state, action.users)

    default:
      return state;
  }
};

export default usersReducer;
