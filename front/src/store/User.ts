import { types } from "mobx-state-tree";

const User = types
  .model("Registro", {
    id: types.number,
    email: types.string,
    username: types.string
  })
  .actions((self: any) => ({
    handleRegister(email, password, username) {
      console.log("funciona");
    }
  }));

export default User;
