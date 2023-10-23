import axios from 'axios';
export const instance = axios.create({
  baseURL: 'https://backend-coral-five.vercel.app',
});
export const instanceToken = axios.create({
  baseURL: 'https://backend-coral-five.vercel.app',
  validateStatus: () => true,
});
