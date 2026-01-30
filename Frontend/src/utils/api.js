import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3001/api', // ✅ /api add kiya
});

API.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
