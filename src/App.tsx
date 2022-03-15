import React from 'react';

import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import { ThemeProvider, lightTheme } from 'resources/theme';

import RootNavigator from 'navigation';
import store from 'store';

const persistor = persistStore(store);

const App = () => (
  <StoreProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider type={lightTheme}>
        <RootNavigator />
      </ThemeProvider>
    </PersistGate>
  </StoreProvider>
);

export default App;
