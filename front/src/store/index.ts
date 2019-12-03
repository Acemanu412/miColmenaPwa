import { types } from "mobx-state-tree";

import ReinaForms from "./ReinaForms";
import User from "./User";

const RootStore = types
  .model("Root", {
    homeMessage: types.optional(types.string, ""),
    reinaForms: types.maybeNull(ReinaForms),
    user: types.maybeNull(User),
    warning: types.optional(types.string, ""),
  })
  .actions((self: any) => ({
    updateHomeMessage: (homeMessage) => {
      self.homeMessage = homeMessage.message;
    },
    updateReinaForm: (inputs: any) => {
      self.reinaForms = inputs;
    },
    updateWarning: (warning) => {
      self.warning = warning.message;
    },
  }));

export default RootStore;
export type IRootStore = typeof RootStore.Type;
