import { combineReducers } from 'redux';

import themeReducer from './theme/reducer';
import authenticateReducer from './authenticate/reducer';

const rootReducers = combineReducers({
  authenticate: authenticateReducer,
  theme: themeReducer,
});

export default rootReducers;
