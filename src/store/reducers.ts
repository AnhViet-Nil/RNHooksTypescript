import { combineReducers } from 'redux';

import authenticateReducer from './authenticate/reducer';

export const rootReducers = combineReducers({
  authenticate: authenticateReducer,
});

export type AppState = ReturnType<typeof rootReducers>;
