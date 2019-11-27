import { types } from "mobx-state-tree";

const ForgotP = types
  .model("ForgotP", {
    email: types.optional(types.string, ""),
    codigo: types.optional(types.string, "")
  })
  .actions((self: any) => ({
    handleEmail(e) {
      console.log(e.target.value, "HOLAAAAA EMAIL");
      self.email = e.target.value;
    },
    handleCodigo(e) {
      self.codigo = e.target.value;
    }
  }));

export default ForgotP;
