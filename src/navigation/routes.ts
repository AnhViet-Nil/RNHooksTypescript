import type { CompositeNavigationProp } from '@react-navigation/native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type { StackNavigationProp } from '@react-navigation/stack';
import { NavigatorScreenParams } from '@react-navigation/native';

export const NAVIGATION_AUTHEN = 'NAVIGATION_AUTHEN';
export const NAVIGATION_LOGIN_SCREEN = 'NAVIGATION_LOGIN_SCREEN';
export const NAVIGATION_REGISTER_SCREEN = 'NAVIGATION_REGISTER_SCREEN';

export const NAVIGATION_MAIN = 'NAVIGATION_MAIN';

export const NAVIGATION_TAB_HOME = 'NAVIGATION_TAB_HOME';
export const NAVIGATION_HOME_SCREEN = 'NAVIGATION_HOME_SCREEN';
export const NAVIGATION_DETAIL_HOME_SCREEN = 'NAVIGATION_DETAIL_HOME_SCREEN';

export const NAVIGATION_TAB_SETTING = 'NAVIGATION_TAB_SETTING';
export const NAVIGATION_SETTING_SCREEN = 'NAVIGATION_SETTING_SCREEN';
export const NAVIGATION_DETAIL_SETTING_SCREEN =
  'NAVIGATION_DETAIL_SETTING_SCREEN';

export type AuthenticateStackList = {
  [NAVIGATION_LOGIN_SCREEN]: undefined;
  [NAVIGATION_REGISTER_SCREEN]: undefined;
};

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

export type RootStackList = {
  [NAVIGATION_AUTHEN]: undefined;
  [NAVIGATION_MAIN]: undefined;
};

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
