import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useDispatch } from 'react-redux';

import { AppDispatch } from 'store';
import { changeStatusAuthenticate } from 'store/actions';

import { Storage } from 'utilities';
import Localization from 'resources/localization';

import { AuthenticateNavigationProp } from 'navigation/routes';
import { AuthenticateAPI } from 'services';

import { RNButton, RNAlert } from 'common/components';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<AuthenticateNavigationProp>();
  const dispatch: AppDispatch = useDispatch();

  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  const login = async () => {
    try {
      // const res = await AuthenticateAPI.login(
      //   'nguyenviet@gmail.com',
      //   '12345678'
      // );
      const res = await AuthenticateAPI.login(email, password);
      if (res.data.status === 0) {
        await Storage.setToken(
          res.data.data?.accessToken,
          res.data.data?.refreshToken
        );
        dispatch(changeStatusAuthenticate(true));
      } else {
        RNAlert.showError(res.data.message);
      }
    } catch (error) {
      if (error instanceof Error) {
        RNAlert.showError(`${error.message}`);
      }
    }
  };

  const nextRegisterScreen = () => {
    navigation.navigate('NAVIGATION_REGISTER_SCREEN');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeEmail}
        placeholder={Localization.loginScreen.email}
      />
      <TextInput
        style={styles.textInput}
        onChangeText={onChangePassword}
        placeholder={Localization.loginScreen.password}
        secureTextEntry
      />
      <RNButton
        text={Localization.loginScreen.login}
        style={styles.button}
        onPress={login}
      />
      <RNButton
        text={Localization.loginScreen.register}
        style={styles.button}
        onPress={nextRegisterScreen}
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
  textInput: {
    borderWidth: 1,
    height: 45,
    margin: 12,
    padding: 10,
  },
});

export default LoginScreen;
