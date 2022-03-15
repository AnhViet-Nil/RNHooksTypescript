import type { CompositeNavigationProp } from '@react-navigation/native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type { StackNavigationProp } from '@react-navigation/stack';

import { AuthenticateStackList } from './AuthenticateNavigator';
import {
  MainBottomTabList,
  HomeStackList,
  SettingStackList,
} from './MainNavigator';

import RootNavigator from './RootNavigator';

export type AuthenticateNavigationProp =
  StackNavigationProp<AuthenticateStackList>;

export type HomeNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<MainBottomTabList, 'NAVIGATION_TAB_HOME'>,
  StackNavigationProp<HomeStackList>
>;

export type SettingNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<MainBottomTabList, 'NAVIGATION_TAB_SETTING'>,
  StackNavigationProp<SettingStackList>
>;

export default RootNavigator;
