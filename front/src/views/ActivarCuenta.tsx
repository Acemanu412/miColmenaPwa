import React, { useState } from "react";
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
        <button onClick={() => {
          return activate(props.match.params.id)
        }}>ACTIVAR CUENTA</button>
      </div>
    </Container>
  );
}
export default ActivarCuenta;
