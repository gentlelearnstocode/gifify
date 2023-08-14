import Axios, { InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { enqueueSnackbar } from 'notistack';

export const axios = Axios.create();

const requestHandler = (config: InternalAxiosRequestConfig) => {
  //intercept API's request and add config here
  return config;
};

axios.interceptors.request.use(requestHandler);

axios.interceptors.response.use(
  (response: AxiosResponse) => response.data?.data,
  (error: AxiosError) => {
    enqueueSnackbar({ variant: 'error', message: error.message });
    return Promise.reject(error);
  },
);
