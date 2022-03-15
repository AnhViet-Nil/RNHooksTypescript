import React, { useContext, useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { changeStatusAuthenticate } from 'store/actions';

import { Storage } from 'utilities';
import { ThemeContext } from 'resources/theme';
import { localization } from 'resources/localization';

import { AuthenticateNavigationProp } from 'navigation';
import { AuthenticateAPI } from 'services';

import { RNButton, RNAlert } from 'common/components';

interface LoginProps {
  loginSuccess: () => void;
}

const LoginScreen: React.FC<LoginProps> = ({ loginSuccess }) => {
  const { theme } = useContext(ThemeContext);
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  const navigation = useNavigation<AuthenticateNavigationProp>();

  async function login() {
    try {
      const res = await AuthenticateAPI.login(
        'nguyenviet@gmail.com',
        '12345678'
      );
      // const res = await AuthenticateAPI.login(email, password);
      if (res.data.status == 0) {
        Storage.setToken(
          res.data.data?.accessToken,
          res.data.data?.refreshToken
        );
        loginSuccess();
      } else {
        RNAlert.showError(res.data.message);
      }
    } catch (error) {
      if (error instanceof Error) {
        RNAlert.showError(`${error.message}`);
      }
    }
  }

  function nextRegisterScreen() {
    navigation.navigate('NAVIGATION_REGISTER_SCREEN');
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeEmail}
        placeholder={localization.loginScreen.email}
      />
      <TextInput
        style={styles.textInput}
        onChangeText={onChangePassword}
        placeholder={localization.loginScreen.password}
        secureTextEntry={true}
      />
      <RNButton
        text={localization.loginScreen.login}
        style={styles.button}
        onPress={login}
      />
      <RNButton
        text={localization.loginScreen.register}
        style={styles.button}
        onPress={nextRegisterScreen}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    height: 45,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    margin: 12,
  },
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  loginSuccess: () => {
    dispatch(changeStatusAuthenticate(true));
  },
});

export default connect(null, mapDispatchToProps)(LoginScreen);
