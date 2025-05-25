import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './assets/tailwind.css';

const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';
console.log('API Base URL:', baseURL);

axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;

const app = createApp(App);
app.use(router);
app.config.globalProperties.$axios = axios;
app.mount('#app');