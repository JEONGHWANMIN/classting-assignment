import axios, { AxiosRequestConfig } from "axios";

const customConfig: AxiosRequestConfig = {
  baseURL: "https://opentdb.com/api.php",
};

export const customAxiosInstance = axios.create(customConfig);
