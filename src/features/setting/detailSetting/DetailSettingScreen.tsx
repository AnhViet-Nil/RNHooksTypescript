import React from 'react';
import { View, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Localization from 'resources/localization';

import { SettingNavigationProp } from 'navigation/routes';

import { RNButton } from 'common/components';

const DetailSettingScreen: React.FC = () => {
  const navigation = useNavigation<SettingNavigationProp>();

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

  return (
    <View style={styles.container}>
      <RNButton
        text={Localization.detailSettingScreen.home}
        style={styles.button}
        onPress={nextHomeScreen}
      />
      <RNButton
        text={Localization.detailSettingScreen.detailHome}
        style={styles.button}
        onPress={nextDetailHomeScreen}
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

export default DetailSettingScreen;
