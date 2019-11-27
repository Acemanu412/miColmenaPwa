import React from "react";
import { useSignUpForm } from "../hooks/loginHook";

import {
  ButtonContainer,
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
  };

  const { inputsSalientes, handleInputChange, handleSubmit } = useSignUpForm(login, { email: "", password: "" });

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
              value={inputsSalientes.email}
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
              value={inputsSalientes.password}
              required={true}
            />
          </InputContainer>

          <ButtonContainer>
            <StyledButtonLogin text="ENTRAR" type="submit" />
          </ButtonContainer>
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

