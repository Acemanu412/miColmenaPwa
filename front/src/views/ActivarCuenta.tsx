import React from "react";
import { activate } from "../api";
import {
  Container,
  LoginLogo,
  StyledButtonLogin,

} from "../styles/LoginStyles";

function ActivarCuenta(props) {
  return (
    <Container>
      <LoginLogo src={require("../utils/logoSombra@2x.png")} />
      <div>
        <StyledButtonLogin onClick={() => {
          return activate(props.match.params.id);
        }} text="ACTIVAR CUENTA" type="submit"/>
      </div>
    </Container>
  );
}
export default ActivarCuenta;
