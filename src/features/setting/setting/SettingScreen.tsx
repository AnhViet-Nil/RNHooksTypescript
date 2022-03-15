import React from 'react';
import { View, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { changeStatusAuthenticate } from 'store/actions';

import Localization from 'resources/localization';
import Storage from 'utilities/encryptedStorage';

import { SettingNavigationProp } from 'navigation/routes';

import { RNButton, RNAlert } from 'common/components';

interface SettingProps {
  logoutSuccess: () => void;
}

const SettingScreen: React.FC<SettingProps> = ({ logoutSuccess }) => {
  const navigation = useNavigation<SettingNavigationProp>();

  const logout = async () => {
    try {
      await Storage.removeToken();
      logoutSuccess();
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

const mapDispatchToProps = (dispatch: Dispatch) => ({
  logoutSuccess: () => {
    dispatch(changeStatusAuthenticate(false));
  },
});

export default connect(null, mapDispatchToProps)(SettingScreen);
