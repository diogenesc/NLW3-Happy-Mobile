import axios from "axios";

const api = axios.create({
  baseURL: process.env.EXPO_SERVER_HOST,
});

export default api;
