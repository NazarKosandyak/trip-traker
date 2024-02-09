import axios from "axios";

export const axiosApiBase = axios.create({
  baseURL: import.meta.env.VITE_COINRANKING_API as string,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosApiBase.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);
