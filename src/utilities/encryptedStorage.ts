import EncryptedStorage from 'react-native-encrypted-storage';

import { KEY } from 'common/constants';

/**
 *  Async Save token to Encrypted Storage
 *
 * @param accessToken is string
 * @param refreshToken is string
 */
async function setToken(accessToken: string = '', refreshToken: string = '') {
  try {
    await EncryptedStorage.setItem(
      KEY.STORAGE_TOKEN,
      JSON.stringify({
        accessToken,
        refreshToken,
      })
    );
  } catch (error) {
    console.log('Cannot save encrypted memory!', error);
  }
}

/**
 *  Async Return token from Encrypted Storage
 */
async function getToken() {
  try {
    const data = await EncryptedStorage.getItem(KEY.STORAGE_TOKEN);
    if (data !== undefined) {
      return data;
    }
  } catch (error) {
    console.log('Cannot access encrypted memory!', error);
  }
}

/**
 *  Async Remove token in Encrypted Storage
 */
async function removeToken() {
  try {
    await EncryptedStorage.removeItem(KEY.STORAGE_TOKEN);
  } catch (error) {
    console.log('Cannot remove encrypted memory!', error);
  }
}

const Storage = {
  setToken,
  getToken,
  removeToken,
};

export default Storage;
