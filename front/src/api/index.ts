import axios from "axios";
import { Link, Redirect } from "react-router-dom";

export const fetchRegister = (username, email, password) =>
  axios
    .post("http://localhost:2222/api/user/signup", {
      email,
      password,
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
    .get(`http://localhost:2222/api/user/activarCuenta/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });

export const postNuevoClave = (email) =>
  axios
    .post("http://localhost:2222/api/user/olvidoClave", { email })
    .then((res) => {
      alert("Te manda una clave temporario a tu correo electronico");
      return res.data;
    })
    .catch((err) => {
      return err;
    });
