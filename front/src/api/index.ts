import axios from "axios";
axios.defaults.withCredentials = true;

export const fetchRegister = (username, email, password, telefono) =>
  axios
    .post(`http://10.100.0.69:2222/api/user/signup`, {
      email,
      password,
      telefono,
      username,
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });

export const activate = (id) =>
  axios
    .get(`http://10.100.0.69:2222/api/user/activarCuenta/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });

export const fetchLogging = (inputsSalientes) => {
  return axios
    .post(`http://10.100.0.69:2222/api/user/session`, {
      email: inputsSalientes.email,
      password: inputsSalientes.password,
    })
    .then((res: any) => res.data)
    .then((user) => {
      return user;
    })
    .catch((err) => {
      return { message: err.response.data };
    });
};

export const postNuevoClave = (email) =>
  axios
    .post(`http://10.100.0.69:2222/api/user/olvidoClave`, {
      email,
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return { message: err.response.data };
    });
export const logOut = () =>
  axios
    .get(`http://10.100.0.69:2222/api/user/logout`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });

export const fetchColmenas = () =>
    axios
      .get(`http://10.100.0.69:2222/api/colmena`)
      .then((res) => res.data)
      .catch((err) => err);
