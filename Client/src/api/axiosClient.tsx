import axios from 'axios';

const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: false, // switch to true if you move to HTTP-only cookies
});

// Attach token from localStorage on each request
http.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Optional: handle 401s (you can hook in a logout callback later)
http.interceptors.response.use(
  (res) => res,
  (err) => {
    // if (err?.response?.status === 401) { /* maybe redirect to login */ }
    return Promise.reject(err);
  }
);

export default http;
