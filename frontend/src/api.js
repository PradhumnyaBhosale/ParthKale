import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://parth-kale.vercel.app',
});

export default API;
