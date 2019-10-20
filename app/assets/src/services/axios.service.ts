import axios from 'axios';

export const axiosService = axios.create({
  baseURL: 'http://cf.weatherapp.lc:3000/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});
