import EncryptedStorage from 'react-native-encrypted-storage';

import { AuthenticateModel } from 'services';

const STORAGE_TOKEN = 'STORAGE_TOKEN';

/**
 *  Async Save token to Encrypted Storage
 *
 * @param accessToken is string
 * @param refreshToken is string
 */
async function setToken(accessToken = '', refreshToken = '') {
  try {
    await EncryptedStorage.setItem(
      STORAGE_TOKEN,
      JSON.stringify({
        accessToken,
        refreshToken,
      })
    );
  } catch (error) {
    throw new Error(`Cannot save encrypted memory! ${error as string}`);
  }
}

/**
 *  Async Return token from Encrypted Storage
 */
async function getToken() {
  try {
    const data = await EncryptedStorage.getItem(STORAGE_TOKEN);
    if (data !== undefined) {
      return JSON.parse(data || '') as AuthenticateModel;
    }
  } catch (error) {
    throw new Error(`Cannot access encrypted memory! ${error as string}`);
  }
}

/**
 *  Async Remove token in Encrypted Storage
 */
async function removeToken() {
  try {
    await EncryptedStorage.removeItem(STORAGE_TOKEN);
  } catch (error) {
    throw new Error(`Cannot remove encrypted memory! ${error as string}`);
  }
}

const Storage = {
  setToken,
  getToken,
  removeToken,
};

export default Storage;
