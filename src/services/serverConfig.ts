import { Platform } from 'react-native';

const DEV = {
  TYPE: 'Develop',
  BASE_URL:
    Platform.OS == 'ios' ? 'http://localhost:3000/' : 'http://10.0.2.2:3000/',
};

const PROD = {
  TYPE: 'Production',
  BASE_URL: 'http://localhost:3000/',
};

const STG = {
  TYPE: 'Staging',
  BASE_URL: 'http://localhost:3000/',
};

const PATHS = {
  authenticate: {
    login: 'authenticate/login',
    register: 'authenticate/register',
    refresh: 'authenticate/refresh',
  },
  user: {
    list: 'user/list',
    update: 'user/',
    delete: 'user/',
  },
  image: {
    avatar: 'image/',
  },
};

const ENV = DEV;

/**
 * Return API url paths
 *
 * @param path is PATHS
 */
function getURL(path: string) {
  return 'api/' + path;
}

export { ENV, PATHS, getURL };
