import { combineReducers } from 'react-redux';
import SessionReducer from './sessionReducer';

const rootReducer = combineReducers({
  session: SessionReducer,
});

export default rootReducer;
