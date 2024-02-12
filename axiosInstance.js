import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_TU_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Application-Key": import.meta.env.VITE_TU_API_TOKEN,
  },
});

axiosInstance.interceptors.request.use(
  function (config) {
    console.log(config.baseURL);

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
