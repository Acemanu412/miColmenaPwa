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
      <StyledButtonLogin onClick={() => {
        store.updateWarning({ message: `Su cuenta ya ha sido activada, ingrese al siguiente link` });
        return activate(props.match.params.id);
      }} text="ACTIVAR CUENTA" type="submit" />
      <StyledWarning />
      {(store.warning ?
        <Link to="/" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", color: "white" }}> Ir a Login </Link>
        :
        null
      )}
    </ContainerActivacion>
  );
},
);
export default ActivarCuenta;
