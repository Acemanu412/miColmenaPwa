import axios from "axios";
axios.defaults.withCredentials = true;

const IP = process.env.REACT_APP_IP || "5.189.179.214";
const PORT = process.env.REACT_APP_PORT || "80";

export const fetchRegister = (username, email, password, telefono) =>
  axios
    .post(`http://${IP}:${PORT}/api/user/signup`, {
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
    .get(`http://${IP}:${PORT}/api/user/activarCuenta/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });

export const fetchLogging = (inputsSalientes) => {
  return axios
    .post(`http://${IP}:${PORT}/api/user/session`, {
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
    .post(`http://${IP}:${PORT}/api/user/olvidoClave`, {
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
    .get(`http://${IP}:${PORT}/api/user/logout`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });

export const fetchColmenas = () =>
    axios
      .get(`http://${IP}:${PORT}/api/colmena`)
      .then((res) => res.data)
      .catch((err) => err);
