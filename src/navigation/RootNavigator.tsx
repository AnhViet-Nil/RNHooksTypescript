import React, { useContext, useEffect } from 'react';
import { StatusBar, StatusBarStyle } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useDispatch, useSelector } from 'react-redux';

import { AppState, AppDispatch } from 'store';
import { changeStatusAuthenticate } from 'store/actions';

import { ThemeContext } from 'resources/theme';

import { Storage } from 'utilities';
import { AuthenticateAPI } from 'services';

import AuthenticateNavigator from './AuthenticateNavigator';
import MainNavigator from './MainNavigator';

import {
  NAVIGATION_MAIN,
  NAVIGATION_AUTHEN,
  type RootStackList,
} from './routes';

const NativeStack = createNativeStackNavigator<RootStackList>();

/**
 * If you need to add normal Navigatior, add it in Root
 */
const RootNavigator: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const { theme } = useContext(ThemeContext);
  const { isLogged } = useSelector((state: AppState) => ({
    isLogged: state.authenticate.status,
  }));

  useEffect(() => {
    if (isLogged) {
      const refreshToken = async () => {
        const data = await Storage.getToken();
        if (data !== undefined) {
          const res = await AuthenticateAPI.refreshToken(data.refreshToken);
          if (res.data.status === 0) {
            await Storage.setToken(
              res.data.data?.accessToken,
              res.data.data?.refreshToken
            );
          } else {
            await Storage.removeToken();
            dispatch(changeStatusAuthenticate(false));
          }
        }
      };
      refreshToken().catch(async () => {
        await Storage.removeToken();
        dispatch(changeStatusAuthenticate(false));
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

export default RootNavigator;
