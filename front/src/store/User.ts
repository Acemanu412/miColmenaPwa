import { types } from "mobx-state-tree";

const User = types
  .model("User", {
    email: types.string,
    id: types.number,
    username: types.string,
  })
  .actions((self: any) => ({
    handleRegister(email, password, username) {
      return null;
    },
  }));

export default User;
