import axios, { AxiosError, AxiosRequestConfig } from 'axios';

const baseURL = 'https://63385362132b46ee0bee361e.mockapi.io/api/v1/'

const axiosInstance = axios.create({
    headers: {
        'Accept'      : 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: 30000,
    baseURL: baseURL,
});

axiosInstance.interceptors.request.use(async (config: AxiosRequestConfig) => {
    console.log('config', config.data)
    console.log('config', config.url)
    return config;
});

//  Interceptor response

axiosInstance.interceptors.response.use(
      response => {
        console.log('response.data', response.data)
        return response;
    },
      (err: AxiosError) => {
          console.log('err.response', err.response?.data)
        //  alert(err.response?.data)
        return Promise.reject(err);
    },
);


export default axiosInstance;
