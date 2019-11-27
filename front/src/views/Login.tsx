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
  StyledLink
} from "../styles/LoginStyles";

export default function Login() {
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
      <div>
        <form onSubmit={handleSubmit}>
          <InputContainer>
            <LoginSobre src={require("../utils/sobre@2x.png")} />
            <StyledInputLogin
              placeholder="Correo electrónico"
              type="email"
              name="email"
              onChange={handleInputChange}
              value={inputs.email}
              required={true}
            />
          </InputContainer>
          <InputContainer>
            <LoginCandado src={require("../utils/candado@2x.png")} />
            <StyledInputLogin
              placeholder="Contraseña"
              type="password"
              name="password"
              onChange={handleInputChange}
              value={inputs.password}
              required={true}
            />
          </InputContainer>

          <StyledButtonLogin text="ENTRAR" type="submit" />
        </form>
      </div>
      <TextLogin>
        <span>¿No estás registrado?</span>
        <StyledLink to="/signup">Registrate aquí</StyledLink>
      </TextLogin>
      <TextLogin>
        <span>¿Olvidaste la clave?</span>
        <StyledLink to="/forgotP">Ingresa aquí</StyledLink>
      </TextLogin>
    </Container>
  );
}
