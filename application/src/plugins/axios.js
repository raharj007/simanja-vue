import axios from "axios";
import store from "../store";

let development = process.env.NODE_ENV !== "production";

export const BASE_URL = development
  ? "http://103.214.112.99:8000"
  : `${window.location.origin}`;
export const API_ROOT = `${BASE_URL}/api`;
const axiosInstance = axios.create({
  baseURL: API_ROOT
});

axiosInstance.interceptors.request.use(config => {
  const headers = {
    Accept: "application/json"
  };
  if (store.getters["auth/getToken"] !== null) {
    headers["Authorization"] = `Bearer ${store.getters["auth/getToken"]}`;
  }
  config.headers = headers;
  return config;
});

axiosInstance.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export function handleError(error, options = {}) {
  let message = null;
  if (error.response && error.response.data.message) {
    message = error.response.data.message;
  } else {
    message = error.response
      ? convertStatusCodeToErrorMessage(error.response.status, options)
      : error.message;
  }

  return {
    error: true,
    message,
    statusCode: error.response ? error.response.status : null
  };
}

export function convertStatusCodeToErrorMessage(statusCode, options = {}) {
  if (null === statusCode) return null;
  if (options[statusCode]) return options[statusCode];

  switch (statusCode) {
    case 400:
      return "Invalid data.";
    case 422:
      return "Duplicate data.";
  }

  return "An error occurred.";
}

export default axiosInstance;
