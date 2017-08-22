import { combineReducers } from 'redux';
import SessionReducer from './sessionReducer';

const rootReducer = combineReducers({
  session: SessionReducer,
});

export default rootReducer;
