import { types } from "mobx-state-tree";

const ForgotP = types
  .model("ForgotP", {
    codigo: types.optional(types.string, ""),
    email: types.optional(types.string, ""),
  })
  .actions((self: any) => ({
    handleEmail(e) {
      self.email = e.target.value;
    },
    handleCodigo(e) {
      self.codigo = e.target.value;
    },
  }));

export default ForgotP;
