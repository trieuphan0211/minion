import { https } from "./AxiosConfig";

import env from "./envConfig";

export const login = async (cookies, setCookies, data) => {
  await https
    .post(env.api.auth, data)
    .then((res) => {
      console.log(res.data);
      res.data.token ? setCookies("token", res.data.token) : "login denined";
      setCookies("token", res.data.token);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
