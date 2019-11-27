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

function ForgotPassword() {
  const login = () => {
    return null;
  };

  const {
    inputsSalientes,
    handleInputChange,
    handleSubmit
  } = useSignUpForm(login, { email: "" });

  return (
    <Container>
      <LoginLogo src={require("../utils/logoSombra@2x.png")} />
      <div>
        <form onSubmit={handleSubmit}>
          <InputContainer>
            <LoginSobre src={require("../utils/sobre@2x.png")} />
            <StyledInputLogin
              placeholder="Ingrese su correo electrónico"
              type="email"
              name="email"
              onChange={handleInputChange}
              value={inputsSalientes.email}
              required={true}
            />
          </InputContainer>

          <StyledButtonLogin text="ENVIAR" type="submit" />
        </form>
      </div>
    </Container>
  );
}
export default ForgotPassword;
