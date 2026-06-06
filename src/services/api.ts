import axios from 'axios';

const configuredBaseURL = import.meta.env.VITE_API_URL?.trim();

if (!configuredBaseURL && import.meta.env.PROD) {
  throw new Error('VITE_API_URL não foi configurada para o build de produção.');
}

const baseURL = (configuredBaseURL || 'http://localhost:3333/api').replace(/\/+$/, '');

const api = axios.create({
  baseURL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
