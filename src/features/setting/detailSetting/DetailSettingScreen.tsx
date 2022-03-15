import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { ThemeContext } from 'resources/theme';
import { localization } from 'resources/localization';

import { SettingNavigationProp } from 'navigation';

import { RNButton } from 'common/components';

const DetailSettingScreen: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  const navigation = useNavigation<SettingNavigationProp>();

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

  return (
    <View style={styles.container}>
      <RNButton
        text={localization.detailSettingScreen.home}
        style={styles.button}
        onPress={nextHomeScreen}
      />
      <RNButton
        text={localization.detailSettingScreen.detailHome}
        style={styles.button}
        onPress={nextDetailHomeScreen}
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

export default DetailSettingScreen;
