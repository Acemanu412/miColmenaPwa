import { types } from "mobx-state-tree";

import ManualForms from "./ManualForms";
import User from "./User";

const RootStore = types
  .model({
    homeMessage: types.optional(types.string, ""),
    manualForms: types.maybeNull(ManualForms),
    user: types.maybeNull(User),
    warning: types.optional(types.string, ""),
  })
  .actions((self) => ({
    updateHomeMessage: (homeMessage) => {
      self.homeMessage = homeMessage.message;
    },
    updateWarning: (warning) => {
      self.warning = warning.message;
    },
  }));

export default RootStore;
export type IRootStore = typeof RootStore.Type;
