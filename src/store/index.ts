import { createStore } from 'redux';

import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { rootReducers } from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['authenticate'],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = createStore(persistedReducer);

export default store;
