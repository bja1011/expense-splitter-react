/**
 * Created by adam on 26.11.17.
 */
import axios from 'axios';
import {API_URL} from './../constants/ApiConstants';
import {isLogged, logout} from "./UserUtils";

const axiosInstance = axios.create({
  baseURL: API_URL
});

/**
 * Catch 401 response code and logout user
 */
axiosInstance.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if(error.response.status === 401 && isLogged()) {
    logout();
    window.location.href = "/";
  }

  return Promise.reject(error);
});

export const apiRequest = (config) => {
  let token = localStorage.getItem('idToken');
  return new Promise((resolve, reject) => {
    if(!config.query) config.query = '';
    axiosInstance[config.method](config.path + '?auth=' + token+config.query, config.data)
      .then(
        (resp) => resolve(resp),
        (err) => {
          reject(err.response);
        }
      )
  })
}

export default axiosInstance;