import axios from "axios";

/**
 * API URL is "http://localhost:8000/api/"
 */
export const API_URL = axios.create({
  baseURL: "http://localhost:8000/api/",
});
