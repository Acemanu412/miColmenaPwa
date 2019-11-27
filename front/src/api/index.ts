import axios from "axios";

export const fetchRegister = (email, password) => ({
  payload: axios
    .post("/api/signup", { email, password })
    .then((res) => {
      console.log("res", res);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    }),
});
