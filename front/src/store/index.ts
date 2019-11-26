import Register from "./Register";
import User from "./User";
import { types } from "mobx-state-tree";

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
