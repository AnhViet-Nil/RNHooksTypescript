import React from 'react';
import { View, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useDispatch } from 'react-redux';

import { AppDispatch } from 'store';
import { changeStatusAuthenticate, changeThemeMode } from 'store/actions';

import { ThemeEnum } from 'resources/theme';
import Localization from 'resources/localization';
import Storage from 'utilities/encryptedStorage';

import { SettingNavigationProp } from 'navigation/routes';

import { RNButton, RNAlert } from 'common/components';

const SettingScreen: React.FC = () => {
  const navigation = useNavigation<SettingNavigationProp>();
  const dispatch: AppDispatch = useDispatch();

  const logout = async () => {
    try {
      await Storage.removeToken();
      dispatch(changeStatusAuthenticate(false));
    } catch (error) {
      if (error instanceof Error) {
        RNAlert.showError(`${error.message}`);
      }
    }
  };

  const nextDetailHomeScreen = () => {
    navigation.navigate('NAVIGATION_TAB_HOME', {
      screen: 'NAVIGATION_DETAIL_HOME_SCREEN',
    });
  };

  const nextHomeScreen = () => {
    navigation.navigate('NAVIGATION_TAB_HOME', {
      screen: 'NAVIGATION_HOME_SCREEN',
    });
  };

  const nextDetailSettingScreen = () => {
    navigation.navigate('NAVIGATION_DETAIL_SETTING_SCREEN');
  };

  const changeThemeModeLight = () => {
    dispatch(changeThemeMode(ThemeEnum.LIGHT));
  };

  const changeThemeModeDark = () => {
    dispatch(changeThemeMode(ThemeEnum.DARK));
  };

  return (
    <View style={styles.container}>
      <RNButton
        text={Localization.settingScreen.logout}
        style={styles.button}
        onPress={logout}
      />
      <RNButton
        text={Localization.settingScreen.detailHome}
        style={styles.button}
        onPress={nextDetailHomeScreen}
      />
      <RNButton
        text={Localization.settingScreen.home}
        style={styles.button}
        onPress={nextHomeScreen}
      />
      <RNButton
        text={Localization.homeScreen.detailSetting}
        style={styles.button}
        onPress={nextDetailSettingScreen}
      />
      <RNButton
        text={Localization.settingScreen.themeLight}
        style={styles.button}
        onPress={changeThemeModeLight}
      />
      <RNButton
        text={Localization.settingScreen.themeDark}
        style={styles.button}
        onPress={changeThemeModeDark}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 12,
  },
  container: {
    flex: 1,
  },
});

export default SettingScreen;
