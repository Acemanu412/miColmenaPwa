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

export const activate = (id) => (
  axios.get(`http://localhost:2222/api/user/activarCuenta/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    })
);
