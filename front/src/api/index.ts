import axios from "axios";

// Para el envío de audios o imagenes
axios.defaults.withCredentials = true;

// Globales. Las opciones por defecto se corresponden con la configuración necesaria desde el dominio al momento de 
// esta implementacion (12/2019)

const IP = process.env.REACT_APP_IP || "app.micolmena.xyz";
const PORT = process.env.REACT_APP_PORT || "";
const PROTOCOL = process.env.REACT_APP_PROTOCOL || "https";

export const fetchRegister = (username, email, password, telefono) =>
  axios
    .post(`${PROTOCOL}://${IP}${PORT}/api/user/signup`, {
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
    .get(`${PROTOCOL}://${IP}${PORT}/api/user/activarCuenta/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });

export const fetchLogging = (inputsSalientes) => {
  return axios
    .post(`${PROTOCOL}://${IP}${PORT}/api/user/session`, {
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
    .post(`${PROTOCOL}://${IP}${PORT}/api/user/olvidoClave`, {
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
    .get(`${PROTOCOL}://${IP}${PORT}/api/user/logout`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });

// Ese pedido AJAX envía los formularios manuales para realizar un registro diario.

export const postNewDailyRegister = (
  colmenasForm,
  consejosAlimento,
  consejosCosecha,
  consejosIntervenciones,
  estadoGeneral,
  notasForms,
  reinaForms,
  colmenaId
) => {
  return axios
    .post(`${PROTOCOL}://${IP}${PORT}/api/colmena/newDailyRegister`, {
      colmenasForm,
      consejosAlimento,
      consejosCosecha,
      consejosIntervenciones,
      estadoGeneral,
      notasForms,
      reinaForms,
      colmenaId,
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const fetchColmenas = () =>
  axios
    .get(`${PROTOCOL}://${IP}${PORT}/api/colmena`)
    .then((res) => res.data)
    .catch((err) => err);

export const fetchUser = () =>
  axios
    .get(`${PROTOCOL}://${IP}${PORT}/api/user/session`)
    .then((res) => res.data)
    .then((user) => user)
    .catch((err) => {
      return { message: err.response.data };
    });

export const fetchDataDevice = (id, day) =>
  axios
    .get(`${PROTOCOL}://${IP}${PORT}/api/colmena/deviceInput/${id}?day=${day}`)
    .then((res) => res.data)
    .then((inputDevice) => inputDevice)
    .catch((err) => {
      return { message: err.response.data };
    });

// Este pedido AJAX recibe los registros manuales de un día en particular.
export const fetchRegistros = (id, day) =>
  axios
    .get(`${PROTOCOL}://${IP}${PORT}/api/colmena/registros/${id}/${day}`)
    .then((res) => res.data)
    .catch((err) => err);
