import { combineReducers } from 'redux';
import SessionReducer from './sessionReducer';
import EntitiesReducer from './entitiesReducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  entities: EntitiesReducer,
});

export default rootReducer;
