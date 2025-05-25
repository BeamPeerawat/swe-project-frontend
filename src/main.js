import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './assets/tailwind.css';

const baseURL = import.meta.env?.VITE_API_BASE_URL || 'https://swe-project-backend-g841.onrender.com';
console.log('API Base URL:', baseURL);

axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;

// Log request details
axios.interceptors.request.use(config => {
  console.log('Request:', config.url, 'withCredentials:', config.withCredentials, 'Headers:', config.headers);
  return config;
}, error => {
  console.error('Request error:', error);
  return Promise.reject(error);
});

// Log response details
axios.interceptors.response.use(response => {
  console.log('Response:', response.config.url, 'Status:', response.status);
  return response;
}, error => {
  console.error('Response error:', error.response?.status, error.response?.data);
  return Promise.reject(error);
});

const app = createApp(App);
app.use(router);
app.config.globalProperties.$axios = axios;
app.mount('#app');