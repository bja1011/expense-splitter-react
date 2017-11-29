/**
 * Created by adam on 26.11.17.
 */
import axios from 'axios';
import {API_URL} from './../constants/ApiConstants';

const axiosInstance = axios.create({
  baseURL: API_URL
});

export const request = (config) => {
  let token = localStorage.getItem('idToken');
  return axiosInstance[config.method](config.path+'?auth='+token,config.data);
}

export default axiosInstance;