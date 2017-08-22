import { RECEIVE_ERRORS,
  RECEIVE_CURRENT_USER } from '../actions/sessionActions';

const intitialState = {
  currentUser: null,
  errors: [],
};

const sessionReducer = (state = intitialState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {currentUser: action.currentUser});

    case RECEIVE_ERRORS:
      return Object.assign({}, state, {errors: action.errors});

    default:
      return state;
  }
};

export default sessionReducer;
