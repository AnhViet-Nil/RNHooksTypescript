import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { changeStatusAuthenticate } from 'store/actions';

import { ThemeContext } from 'resources/theme';
import { localization } from 'resources/localization';

import Storage from 'utilities/encryptedStorage';

import { SettingNavigationProp } from 'navigation';

import { RNButton, RNAlert } from 'common/components';

interface SettingProps {
  logoutSuccess: () => void;
}

const SettingScreen: React.FC<SettingProps> = ({ logoutSuccess }) => {
  const { theme } = useContext(ThemeContext);

  const navigation = useNavigation<SettingNavigationProp>();

  async function logout() {
    try {
      await Storage.removeToken();
      logoutSuccess();
    } catch (error) {
      if (error instanceof Error) {
        RNAlert.showError(`${error.message}`);
      }
    }
  }

  function nextDetailHomeScreen() {
    navigation.navigate('NAVIGATION_TAB_HOME', {
      screen: 'NAVIGATION_DETAIL_HOME_SCREEN',
    });
  }

  function nextHomeScreen() {
    navigation.navigate('NAVIGATION_TAB_HOME', {
      screen: 'NAVIGATION_HOME_SCREEN',
    });
  }

  function nextDetailSettingScreen() {
    navigation.navigate('NAVIGATION_DETAIL_SETTING_SCREEN');
  }

  return (
    <View style={styles.container}>
      <RNButton
        text={localization.settingScreen.logout}
        style={styles.button}
        onPress={logout}
      />
      <RNButton
        text={localization.settingScreen.detailHome}
        style={styles.button}
        onPress={nextDetailHomeScreen}
      />
      <RNButton
        text={localization.settingScreen.home}
        style={styles.button}
        onPress={nextHomeScreen}
      />
      <RNButton
        text={localization.homeScreen.detailSetting}
        style={styles.button}
        onPress={nextDetailSettingScreen}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    margin: 12,
  },
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  logoutSuccess: () => {
    dispatch(changeStatusAuthenticate(false));
  },
});

export default connect(null, mapDispatchToProps)(SettingScreen);
