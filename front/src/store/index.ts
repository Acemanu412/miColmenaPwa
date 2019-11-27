import { types } from "mobx-state-tree";

import User from "./User";

const RootStore = types
  .model({
    user: types.maybeNull(User),
  })
  .actions((self) => ({
    login: (username, password) => {
      // ajax request to backend
    },
  }));

export default RootStore;
export type IRootStore = typeof RootStore.Type;
