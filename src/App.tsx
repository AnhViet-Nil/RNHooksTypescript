import React from 'react';

import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import RootNavigator from 'navigation';
import store from 'store';

const persistor = persistStore(store);

const App = () => {
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigator />
      </PersistGate>
    </StoreProvider>
  );
};

export default App;
