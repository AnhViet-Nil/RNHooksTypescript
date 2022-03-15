import React, { useContext, useEffect } from 'react';
import { StatusBar, StatusBarStyle } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { changeStatusAuthenticate } from 'store/actions';
import { AppState } from 'store/reducers';

import { ThemeContext } from 'resources/theme';

import { Storage } from 'utilities';
import { AuthenticateModel, AuthenticateAPI } from 'services';

import AuthenticateNavigator from './AuthenticateNavigator';
import MainNavigator from './MainNavigator';

import { NAVIGATION_MAIN, NAVIGATION_AUTHEN } from './routes';

export type RootStackList = {
  [NAVIGATION_AUTHEN]: undefined;
  [NAVIGATION_MAIN]: undefined;
};

const NativeStack = createNativeStackNavigator<RootStackList>();

interface RootNavigatorProps {
  isLogged: boolean;
  refreshTokenFailure: () => void;
}

/**
 * If you need to add normal Navigatior, add it in Root
 */
const RootNavigator: React.FC<RootNavigatorProps> = ({
  isLogged,
  refreshTokenFailure,
}) => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (isLogged) {
      async function refreshToken() {
        const data = await Storage.getToken();
        if (data) {
          const dataObj = JSON.parse(data) as AuthenticateModel;
          const res = await AuthenticateAPI.refreshToken(dataObj.refreshToken);
          if (res.data.status == 0) {
            Storage.setToken(
              res.data.data?.accessToken,
              res.data.data?.refreshToken
            );
          } else {
            Storage.removeToken();
            refreshTokenFailure();
          }
        }
      }
      refreshToken().catch(() => {
        Storage.removeToken();
        refreshTokenFailure();
      });
    }
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={theme.navigationbar.barStyle as StatusBarStyle} />
      <NavigationContainer>
        <NativeStack.Navigator screenOptions={{ headerShown: false }}>
          {isLogged ? (
            <NativeStack.Screen
              name={NAVIGATION_MAIN}
              component={MainNavigator}
            />
          ) : (
            <NativeStack.Screen
              name={NAVIGATION_AUTHEN}
              component={AuthenticateNavigator}
            />
          )}
        </NativeStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const mapStateToProps = (state: AppState) => ({
  isLogged: state.authenticate.status,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  refreshTokenFailure: () => {
    dispatch(changeStatusAuthenticate(false));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RootNavigator);
