import Axios, { InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

export const axios = Axios.create();

const requestHandler = (config: InternalAxiosRequestConfig) => {
  return config;
};

axios.interceptors.request.use(requestHandler);

axios.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error: AxiosError) => {
    console.log('Error: ', error);
    return Promise.reject(error);
  },
);
