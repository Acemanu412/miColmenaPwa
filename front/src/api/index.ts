import axios from "axios";

export const fetchRegister = (username, email, password) => (
  axios
    .post("http://10.100.0.49:2222/api/user/signup", {
      email,
      password,
      username,
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    })
);

export const activate = (id) => (axios
  .get(`http://10.100.0.49:2222/api/user/activarCuenta/${id}`)
  .then((res) => {
    return res.data;
  })
  .catch((err) => {
    return err;
  })
);

export const fetchLogging = (inputsSalientes) => {
  return axios
    .post("http://10.100.0.49:2222/api/user/session", {
      email: inputsSalientes.email,
      password: inputsSalientes.password,
    })
    .then((res: any) => res.data)
    .then(() => {
      return { message: "" };
    })
    .catch((err) => {
      return { message: err.response.data };
    });
};

export const postNuevoClave = (email) => (
  axios.post("http://10.100.0.49:2222/api/user/olvidoClave", { email }).then((res) => {
    alert("Te manda una clave temporario a tu correo electronico");
    return res.data;
  })
    .catch((err) => {
      return {message: err.response.data};
    })
);
