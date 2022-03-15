import React, { useContext } from 'react';

import { NavigatorScreenParams } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ThemeContext } from 'resources/theme';
import { localization } from 'resources/localization';
import { KEY } from 'common/constants';

import {
  HomeScreen,
  DetailHomeScreen,
  SettingScreen,
  DetailSettingScreen,
} from 'features';

import {
  NAVIGATION_TAB_HOME,
  NAVIGATION_TAB_SETTING,
  NAVIGATION_HOME_SCREEN,
  NAVIGATION_DETAIL_HOME_SCREEN,
  NAVIGATION_SETTING_SCREEN,
  NAVIGATION_DETAIL_SETTING_SCREEN,
} from './routes';

export type HomeStackList = {
  [NAVIGATION_HOME_SCREEN]: undefined;
  [NAVIGATION_DETAIL_HOME_SCREEN]: undefined;
};

export type SettingStackList = {
  [NAVIGATION_SETTING_SCREEN]: undefined;
  [NAVIGATION_DETAIL_SETTING_SCREEN]: undefined;
};

export type MainBottomTabList = {
  [NAVIGATION_TAB_HOME]: NavigatorScreenParams<HomeStackList>;
  [NAVIGATION_TAB_SETTING]: NavigatorScreenParams<SettingStackList>;
};

const BottomTab = createBottomTabNavigator<MainBottomTabList>();
const HomeStack = createNativeStackNavigator<HomeStackList>();
const SettingStack = createNativeStackNavigator<SettingStackList>();

/**
 * If you need to add normal screens, add it in Tab Home
 */
const HomeNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName={NAVIGATION_HOME_SCREEN}>
      <HomeStack.Screen
        name={NAVIGATION_HOME_SCREEN}
        component={HomeScreen}
        options={({ navigation }) => ({
          title: localization.homeScreen.title,
        })}
      />
      <HomeStack.Screen
        name={NAVIGATION_DETAIL_HOME_SCREEN}
        component={DetailHomeScreen}
        options={({ navigation }) => ({
          title: localization.detailHomeScreen.title,
        })}
      />
    </HomeStack.Navigator>
  );
};

/**
 * If you need to add normal screens, add it in Tab Setting
 */
const SettingNavigator = () => {
  return (
    <SettingStack.Navigator initialRouteName={NAVIGATION_SETTING_SCREEN}>
      <SettingStack.Screen
        name={NAVIGATION_SETTING_SCREEN}
        component={SettingScreen}
        options={({ navigation }) => ({
          title: localization.settingScreen.title,
        })}
      />
      <SettingStack.Screen
        name={NAVIGATION_DETAIL_SETTING_SCREEN}
        component={DetailSettingScreen}
        options={({ navigation }) => ({
          title: localization.detailSettingScreen.title,
        })}
      />
    </SettingStack.Navigator>
  );
};

/**
 * If you need to add normal screens, add it in TabBar Main
 */
const MainNavigator = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: theme.tabbar.active,
        tabBarInactiveTintColor: theme.tabbar.inactive,
        headerShown: false,
      })}>
      <BottomTab.Screen
        name={NAVIGATION_TAB_HOME}
        component={HomeNavigator}
        options={{
          tabBarLabel: localization.tabbar.home,
        }}
      />
      <BottomTab.Screen
        name={NAVIGATION_TAB_SETTING}
        component={SettingNavigator}
        options={{
          tabBarLabel: localization.tabbar.setting,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default MainNavigator;
