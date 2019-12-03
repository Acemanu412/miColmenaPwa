import { types } from "mobx-state-tree";

import User from "./User";

const RootStore = types
  .model({
    homeMessage: types.optional(types.string, ""),
    user: types.maybeNull(User),
    warning: types.optional(types.string, ""),
  })
  .actions((self) => ({
    setUser(user: any) {
      self.user = user;
    },
    updateHomeMessage: (homeMessage) => {
      self.homeMessage = homeMessage.message;
    },
    updateWarning: (warning) => {
      self.warning = warning.message;
    },
  }));

export default RootStore;
export type IRootStore = typeof RootStore.Type;
