import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.5:3000',
    timeout: 10000,
  });
  
export default api;