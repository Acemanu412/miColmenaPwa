import axios from "axios";

export const fetchRegister = (username, email, password) => (
  axios.post("http://localhost:2222/api/user/signup", { username, email, password })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    })
);

<<<<<<< HEAD
export const fetchLogging = (inputsSalientes) => {
  return axios
      .post("http://localhost:2222/api/user/session", {
        email: inputsSalientes.email,
        password: inputsSalientes.password,
      })
      .then((res: any) => res.data)
      .then(() => {
        return {message : "" };
      })
      .catch((err) => {
        return { message: err.response.data };
      });
};
=======
export const postNuevoClave = (email) => (
  axios.post("http://localhost:2222/api/user/olvidoClave", {email}).then((res) => {
    alert("Te manda una clave temporario a tu correo electronico");
    return res.data;
  })
  .catch((err) => {
  return err;
  })
);
>>>>>>> 693b5eab603075d056cd19f12abfe6498ef20c86
