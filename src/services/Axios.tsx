import axios from 'axios';

import { ENV } from './serverConfig';
import Logger from './serverLogger';

const Axios = axios.create({
  baseURL: ENV.BASE_URL,
  timeout: 3000,
});

Axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    Logger.describeRequest(config);
    return config;
  },
  function (error) {
    // Do something with request error
    Logger.describeErrorResponse(error);
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    Logger.describeSuccessResponse(response);
    if (response?.data?.accessToken) {
      Axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${response.data.accessToken}`;
    }
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    Logger.describeErrorResponse(error);
    if (error.response) {
      return error.response;
    } else {
      return Promise.reject(error);
    }
  }
);

export default Axios;
