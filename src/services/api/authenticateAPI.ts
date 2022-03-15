import Axios from '../Axios';
import { PATHS, getURL } from '../serverConfig';

import { BaseModel, AuthenticateModel } from './model';

/**
 * Call API login.
 * Return data model AuthenticateModel
 *
 * @param email is string
 * @param password is string
 */
function login(email: string, password: string) {
  const url = getURL(PATHS.authenticate.login);
  const params = {
    email,
    password,
  };
  return Axios.post<BaseModel<AuthenticateModel>>(url, params);
}

/**
 * Call API register.
 * Return data model AuthenticateModel
 *
 * @param email is string
 * @param password is string
 * @param name is string
 * @param gender is string
 * @param address is string
 */
function register(
  email: string,
  password: string,
  name: string,
  gender: string,
  address: string
) {
  const url = getURL(PATHS.authenticate.register);
  const params = {
    email,
    password,
    name,
    gender,
    address,
  };
  return Axios.post<BaseModel<AuthenticateModel>>(url, params);
}

/**
 * Call API refresh accessToken.
 * Return data model AuthenticateModel
 *
 * @param refreshToken is string
 */
function refreshToken(refreshToken: string) {
  const url = getURL(PATHS.authenticate.refresh);
  const params = {
    refreshToken,
  };
  return Axios.post<BaseModel<AuthenticateModel>>(url, params);
}

const AuthenticateAPI = {
  login,
  register,
  refreshToken,
};

export default AuthenticateAPI;
