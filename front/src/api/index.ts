import axios from "axios";

export const fetchRegister = (username, email, password) => (
  axios.post("/api/user/signup", { username, email, password })
    .then((res) => {
      console.log("res", res);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    })
);
