import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ENV } from './serverConfig';

/**
 * If SHOW_LOG = false to stop API logging
 */
const SHOW_LOG = true;

/**
 * Describe request api logging
 *
 * @param config is AxiosRequestConfig
 */
function describeRequest(config: AxiosRequestConfig<any>) {
  if (!SHOW_LOG || ENV.TYPE !== 'Develop') {
    return;
  }
  //------------------------------------------
  console.group('%c REQUEST', 'color: white; background-color: #2274A5');
  console.log(`URI: ${config.url}`);
  console.log(`METHOD: ${config.method}`);
  console.log('HEADERS:');
  console.log('HEADERS:', JSON.stringify(config.headers?.common));
  //------------------------------------------
  if (config.params) {
    console.log('PARAMS:', JSON.stringify(config.params));
  }
  //-------------------------------------------
  if (config.data) {
    console.log('BODY:', JSON.stringify(config.data));
  }
  //--------------------------------------------
  console.groupEnd();
}

/**
 * Describe response api logging
 *
 * @param response is AxiosResponse
 */
function describeSuccessResponse(response: AxiosResponse<any, any>) {
  if (!SHOW_LOG || ENV.TYPE !== 'Develop') {
    return;
  }
  //----------------------------------------------
  console.group('%c RESPONSE', 'color: white; background-color: #95B46A');
  console.log(`URI: ${response.request._url}`);
  console.log(`STATUS: ${response.status}`);
  //----------------------------------------------
  console.log('DATA:', JSON.stringify(response.data));
  //--------------------------------------------------
  console.groupEnd();
}

/**
 * Describe error response api logging
 *
 * @param error is any
 */
function describeErrorResponse(error: any) {
  if (!SHOW_LOG || ENV.TYPE !== 'Develop') {
    return;
  }
  //-----------------------------------------------------
  console.group('%c ERROR', 'color: white; background-color: #D33F49');
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    const request = error.response.request || error.request || {};
    console.log(`URI: ${request._url}`);
    console.log(`STATUS: ${error.response.status}`);
    //------------------------------------------------
    console.log('DATA:', JSON.stringify(error.response.data));
    //------------------------------------------------
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log(`URI: ${error.request._url}`);
    console.log('REQUEST:');
    console.log('REQUEST:', JSON.stringify(error.request._response));
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log(`UNKNOWN ERROR: ${error.message}`);
  }
  console.log('CONFIG:', JSON.stringify(error.config));
  console.groupEnd();
}

const Logger = {
  describeRequest,
  describeSuccessResponse,
  describeErrorResponse,
};

export default Logger;
