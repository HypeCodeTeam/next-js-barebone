import { ReactElement } from 'react';
import axios from 'axios';

axios.interceptors.request.use(
  (request) => {
    // intercept all http request, you can add the user token here
    return request;
  }, (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => response,
  (err) => {
    // intercept all http response, you can handle all error here
    return Promise.reject(err);
  }
);

const AxiosProvider = ({ children }: { children: ReactElement }) => children;

export default AxiosProvider;
