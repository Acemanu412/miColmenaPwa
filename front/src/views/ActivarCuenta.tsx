import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import { activate } from "../api";
import { useStores } from "../hooks/useStore";
import { StyledWarning } from "../styles/GlobalStyles";
import {
  ContainerActivacion,
  LoginLogo,
  StyledButtonLogin,
} from "../styles/LoginStyles";

const ActivarCuenta = observer((props: any) => {
  const store = useStores();

  return (
    <ContainerActivacion>
      <LoginLogo src={require("../utils/logoSombra@2x.png")} />
      <StyledButtonLogin
        onClick={() => {
          store.updateWarning({
            message: `Su cuenta ya ha sido activada, ingrese al siguiente link`,
          });
          return activate(props.match.params.id);
        }}
        text="ACTIVAR CUENTA"
        type="submit"
      />
      <StyledWarning style={{ marginTop: "10%" }} />
      {store.warning ? (
        <div style={{ marginTop: "10%" }}>
          <Link style={{ color: "white" }} to="/">
            {" "}
            MiColmena.com
          </Link>
        </div>
      ) : null}
    </ContainerActivacion>
  );
});
export default ActivarCuenta;
