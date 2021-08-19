import axios from 'axios';
import {apiBaseUrl} from './environment';

const prepRequest = request => {
  const {method, data, url, params} = request;
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  return {
    data,
    headers,
    method,
    url,
    params,
    baseURL: apiBaseUrl,
  };
};

const doRequest = async options => {
  return await axios.request(options);
};

export const run = async request => {
  const options = prepRequest(request);
  return await doRequest(options);
};
