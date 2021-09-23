import axios from 'axios';
import NProgress from 'nprogress';

export function useApi(token) {
  const api = axios.create({
    baseURL: 'http://localhost:1337',
  });

  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token.value}`;
  }

  api.interceptors.request.use(
    (config) => {
      NProgress.start();
      return config;
    },
    (error) => {
      NProgress.done();
      return Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    (response) => {
      NProgress.done();
      return response;
    },
    (error) => {
      NProgress.done();
      return Promise.reject(error);
    }
  );

  return {
    api,
  };
}
