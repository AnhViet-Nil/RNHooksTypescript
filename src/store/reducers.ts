import { combineReducers } from 'redux';

import authenticateReducer from './authenticate/reducer';

const rootReducers = combineReducers({
  authenticate: authenticateReducer,
});

export default rootReducers;
