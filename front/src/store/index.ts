<<<<<<< HEAD
import { types } from "mobx-state-tree";

export enum SignUpFormProperties {
  email,
  password
}
=======
import Register from "./Register";
import User from "./User";
import { types } from "mobx-state-tree";
>>>>>>> cd6a8c4028933857e650f8df68743fd5d1dbb6be

const RootStore = types
  .model({
    register: types.optional(Register, {}),
    user: types.maybeNull(User)
  })
  .actions(self => ({
    login: (username, password) => {
      //ajax request to backend
    }
  }));

export default RootStore;
export type IRootStore = typeof RootStore.Type;
