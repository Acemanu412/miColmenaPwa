import React, { useState } from "react";
import { useSignUpForm } from "../hooks/loginHook";

import {
  Container,
  StyledInputLogin,
  LoginLogo,
  StyledButtonLogin,
  LoginSobre,
  LoginCandado,
  InputContainer,
  TextLogin,
  StyledLink,
  FormContainer
} from "../styles/LoginStyles";

function SendCode() {
  const login = () => {
    //Generar el axios para realizar el login al hacer el submit
    alert(`Usuario logueado!
           Email: ${inputs.email}
           Password: ${inputs.password}`);
  };

  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(login);

  return (
    <Container>
      <LoginLogo src={require("../utils/logoSombra@2x.png")} />
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <InputContainer>
            <LoginSobre src={require("../utils/sobre@2x.png")} />
            <StyledInputLogin
              placeholder="Correo electrónico"
              type="email"
              name="email"
              onChange={handleInputChange}
              // value={inputs.email}
              required={true}
            />
          </InputContainer>
          <InputContainer>
            <LoginCandado src={require("../utils/candado@2x.png")} />
            <StyledInputLogin
              placeholder="Código"
              type="codigo"
              name="codigo"
              onChange={handleInputChange}
              // value={inputs.password}
              required={true}
            />
          </InputContainer>

          <StyledButtonLogin text="ENVIAR" type="submit" />
        </form>
      </FormContainer>
    </Container>
  );
}

export default SendCode;
