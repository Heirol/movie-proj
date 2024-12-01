import axios from "axios";
import { BASE_URL } from "../network/config";

const apiService = axios.create({
  baseURL: BASE_URL,
});

apiService.interceptors.request.use(
  (request) => {
    console.log("START REQUEST", request);
    const apiKey = process.env.REACT_APP_API_KEY || "0388ea5c37be1a573dcd3a5402d2f74e"; // Thay 'YOUR_API_KEY' bằng giá trị tạm thời nếu cần
    if (request.url) {
      request.url += request.url.includes("?") ? `&api_key=${apiKey}` : `?api_key=${apiKey}`;
    }
    return request;
  },
  function (error) {
    console.log("REQUEST ERROR", error);
  }
);

apiService.interceptors.response.use(
  (request) => {
    console.log("RESPONSE", request);
    return request;
  },
  function (error) {
    console.log("RESPONSE ERROR", error);
  }
);

export default apiService;

// https://api.themoviedb.org/3/watch/providers/movie?api_key=0388ea5c37be1a573dcd3a5402d2f74e
