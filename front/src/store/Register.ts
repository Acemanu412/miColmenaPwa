import { types } from "mobx-state-tree";

const Register = types
  .model("Register", {
    email: types.optional(types.string, ""),
    password: types.optional(types.string, ""),
    username: types.optional(types.string, "")
  })
  .actions((self: any) => ({
    handleRegister: (email, password, username) => {
      // fetchRegister(email, password, username);
    },
  }));

export default Register;
