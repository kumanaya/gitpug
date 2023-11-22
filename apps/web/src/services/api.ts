import axios, { AxiosInstance, AxiosError } from "axios";
import { toast } from "react-toastify";

const apiJwt: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

apiJwt.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${JSON.parse(token)}`;
  }
  return config;
});

apiJwt.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    console.error(error);
    if (error.response?.data) {
      toast.error((error.response?.data as { message: string }).message);
    }
    return Promise.reject(error);
  }
);

export default apiJwt;
