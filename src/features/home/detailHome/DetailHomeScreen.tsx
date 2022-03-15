import React from 'react';
import { View, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Localization from 'resources/localization';

import { HomeNavigationProp } from 'navigation/routes';

import { RNButton } from 'common/components';

const DetailHomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeNavigationProp>();

  const nextSettingScreen = () => {
    navigation.navigate('NAVIGATION_TAB_SETTING', {
      screen: 'NAVIGATION_SETTING_SCREEN',
    });
  };

  const nextDetailSettingScreen = () => {
    navigation.navigate('NAVIGATION_TAB_SETTING', {
      screen: 'NAVIGATION_DETAIL_SETTING_SCREEN',
    });
  };

  return (
    <View style={styles.container}>
      <RNButton
        text={Localization.detailHomeScreen.setting}
        style={styles.button}
        onPress={nextSettingScreen}
      />
      <RNButton
        text={Localization.detailHomeScreen.detailSetting}
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

export default DetailHomeScreen;
