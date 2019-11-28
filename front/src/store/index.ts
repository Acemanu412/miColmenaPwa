import { types } from "mobx-state-tree";

import User from "./User";

const RootStore = types
  .model({
    user: types.maybeNull(User),
    warning: types.optional(types.string, ""),
  })
  .actions((self) => ({
    updateWarning: (warning) => {
      self.warning = warning.message;
    },
  }));

export default RootStore;
export type IRootStore = typeof RootStore.Type;
