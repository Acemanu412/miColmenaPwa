import { types, flow } from "mobx-state-tree";

export enum SignUpFormProperties {
  email,
  password
}

const RootStore = types
  .model({
    email: types.optional(types.string, ""),
    password: types.optional(types.string, "")
  })
  .actions(self => ({
    handleChange: (key: SignUpFormProperties, val: string) => {
      console.log(key);
      // selfemail = val;
    },
    handleSubmit: () => {
      console.log(self);
    }
  }));

export default RootStore;
export type IRootStore = typeof RootStore.Type;
