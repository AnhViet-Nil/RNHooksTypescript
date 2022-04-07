import React, { useEffect, useCallback } from 'react';
import { StatusBar } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useDispatch, useSelector } from 'react-redux';

import { AppState, AppDispatch } from 'store';
import { changeStatusAuthenticate } from 'store/actions';

import { LightTheme, DarkTheme, ThemeEnum } from 'resources/theme';

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
const RootNavigator: React.FC = (props) => {
  const dispatch: AppDispatch = useDispatch();
  const { isLogged, themeMode } = useSelector((state: AppState) => ({
    isLogged: state.authenticate.status,
    themeMode: state.theme.mode,
  }));

  const refreshToken = useCallback(async () => {
    try {
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
    } catch {
      await Storage.removeToken();
      dispatch(changeStatusAuthenticate(false));
    }
  }, [props]);

  useEffect(() => {
    if (isLogged) {
      refreshToken();
    }
  }, [refreshToken]);

  return (
    <SafeAreaProvider>
      <StatusBar />
      <NavigationContainer
        theme={themeMode === ThemeEnum.LIGHT ? LightTheme : DarkTheme}>
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
