import React from "react";

import { useSignUpForm } from "../hooks/loginHook";

import {
  Container,
  LoginAvatar,
  InputContainer,
  LoginCandado,
  LoginLogo,
  LoginSobre,
  StyledButtonLogin,
  StyledInputLogin,
  StyledLink,
  TextLogin,
  FormContainer
} from "../styles/LoginStyles";

export default function Signup() {
  const login = () => {
    return null;
  };

  const {
    inputsSalientes,
    handleInputChange,
    handleSubmit
  } = useSignUpForm(login, { email: "", password: "", user: "" });

  return (
    <Container>
      <LoginLogo src={require("../utils/logoSombra@2x.png")} />
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <InputContainer>
            <LoginAvatar src={require("../utils/avatar@2x.png")} />
            <StyledInputLogin
              placeholder="Nombre de usuario"
              type="user"
              name="user"
              onChange={handleInputChange}
              value={inputsSalientes.user}
              required={true}
            />
          </InputContainer>
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
          <StyledButtonLogin text="REGISTRAR" type="submit" />
        </form>
        <TextLogin>
          <span>¿estás registrado?</span>
          <StyledLink to="/l">Ingresa aquí</StyledLink>
        </TextLogin>
      </FormContainer>
    </Container>
  );
}
