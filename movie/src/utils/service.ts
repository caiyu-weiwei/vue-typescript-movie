import axios from 'axios';

import { Toast } from 'vant';

import { AxiosRequestConfig, AxiosResponse } from 'axios';

const baseURL = 'https://api.douban.com/v2/movie/';

const service = axios.create({
  baseURL,
  timeout: 0,
  maxContentLength: 4000,
});

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error: any) => {
    return Promise.reject(error)
  },
);

service.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status !== 200) {
      Toast.fail('请求错误!')
    } else {
      return response.data
    }
  },
  (error: any) => {
    return Promise.reject(error)
  },
);
export default service;
