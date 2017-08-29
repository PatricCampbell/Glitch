import { OPEN_MODAL, CLOSE_MODAL } from '../actions/uiActions';

const uiReducer = (state = {modal: null}, action) => {
  Object.freeze(state);

  switch (action.type) {

    case OPEN_MODAL:
      return { modal: action.modal };
    
    case CLOSE_MODAL:
      return { modal: null };

    default:
      return state;  
  }
};

export default uiReducer;