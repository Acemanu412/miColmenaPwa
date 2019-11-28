import React from "react";
import { activate } from "../api";
import {
  Container,
  LoginLogo,
  StyledButtonLogin,

} from "../styles/LoginStyles";

function ActivarCuenta(props) {
  return (
    <Container style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
      <LoginLogo src={require("../utils/logoSombra@2x.png")} />
        <StyledButtonLogin onClick={() => {
          return activate(props.match.params.id);
        }} text="ACTIVAR CUENTA" type="submit"/>
    </Container>
  );
}
export default ActivarCuenta;
