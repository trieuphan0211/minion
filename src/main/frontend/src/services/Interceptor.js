import axios from "axios";

export function jwtInterceptor() {
  axios.interceptors.request.use((request) => {
    // add auth header with jwt if account is logged in and request is to the api url
    const authorization = localStorage.getItem("token");
    if (authorization) {
      request.headers.common.Authorization = authorization;
      console.log("Authorization: ", authorization);
    }
    window.fetch = async (request) => {
      const authorization = localStorage.getItem("token");
      if (authorization) {
        request.Authorization = authorization;
        console.log("Authorization1: ", authorization);
      }
      request.Authorization = authorization;
    };
    return request;
  });
}
