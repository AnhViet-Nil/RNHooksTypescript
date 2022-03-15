import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { ThemeContext } from 'resources/theme';
import { localization } from 'resources/localization';

import { HomeNavigationProp } from 'navigation';

import { RNButton } from 'common/components';

const HomeScreen: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  const navigation = useNavigation<HomeNavigationProp>();

  function nextDetailHomeScreen() {
    navigation.navigate('NAVIGATION_DETAIL_HOME_SCREEN');
  }

  function nextSettingScreen() {
    navigation.navigate('NAVIGATION_TAB_SETTING', {
      screen: 'NAVIGATION_SETTING_SCREEN',
    });
  }

  function nextDetailSettingScreen() {
    navigation.navigate('NAVIGATION_TAB_SETTING', {
      screen: 'NAVIGATION_DETAIL_SETTING_SCREEN',
      initial: false,
    });
  }

  return (
    <View style={styles.container}>
      <RNButton
        text={localization.homeScreen.detailHome}
        style={styles.button}
        onPress={nextDetailHomeScreen}
      />
      <RNButton
        text={localization.homeScreen.setting}
        style={styles.button}
        onPress={nextSettingScreen}
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

export default HomeScreen;
