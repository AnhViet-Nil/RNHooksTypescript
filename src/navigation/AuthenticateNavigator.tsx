import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { localization } from 'resources/localization';
import { KEY } from 'common/constants';

import { LoginScreen, RegisterScreen } from 'features';

import { NAVIGATION_LOGIN_SCREEN, NAVIGATION_REGISTER_SCREEN } from './routes';

export type AuthenticateStackList = {
  [NAVIGATION_LOGIN_SCREEN]: undefined;
  [NAVIGATION_REGISTER_SCREEN]: undefined;
};

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
        options={({ navigation }) => ({
          title: localization.loginScreen.title,
        })}
      />
      <NativeStack.Screen
        name={NAVIGATION_REGISTER_SCREEN}
        component={RegisterScreen}
        options={({ navigation }) => ({
          title: localization.registerScreen.title,
        })}
      />
    </NativeStack.Navigator>
  );
};

export default AuthenticateNavigator;
