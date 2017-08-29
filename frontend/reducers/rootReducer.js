import { combineReducers } from 'redux';
import SessionReducer from './sessionReducer';
import EntitiesReducer from './entitiesReducer';
import UiReducer from './uiReducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  entities: EntitiesReducer,
  ui: UiReducer,
});

export default rootReducer;
