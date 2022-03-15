import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Localization from 'resources/localization';

import { LoginScreen, RegisterScreen } from 'features';

import {
  NAVIGATION_LOGIN_SCREEN,
  NAVIGATION_REGISTER_SCREEN,
  type AuthenticateStackList,
} from './routes';

const NativeStack = createNativeStackNavigator<AuthenticateStackList>();

/**
 * If you need to add normal screens, add it in Authenticate
 */
const AuthenticateNavigator = () => {
  return (
    <NativeStack.Navigator initialRouteName={NAVIGATION_LOGIN_SCREEN}>
      <NativeStack.Screen
        name={NAVIGATION_LOGIN_SCREEN}
        component={LoginScreen}
        options={() => ({
          title: Localization.loginScreen.title,
        })}
      />
      <NativeStack.Screen
        name={NAVIGATION_REGISTER_SCREEN}
        component={RegisterScreen}
        options={() => ({
          title: Localization.registerScreen.title,
        })}
      />
    </NativeStack.Navigator>
  );
};

export default AuthenticateNavigator;
