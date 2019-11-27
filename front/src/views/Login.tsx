import React from "react";

import { fetchLogging } from "../api/";
import { useSignUpForm } from "../hooks/loginHook";
import { useStores } from "../hooks/useStore";

import {
  Container,
  FormContainer,
  InputContainer,
  LoginCandado,
  LoginLogo,
  LoginSobre,
  StyledButtonLogin,
  StyledInputLogin,
  StyledLink,
  TextLogin,
} from "../styles/LoginStyles";

export default function Login() {
  const login = () => {
    if (!inputsSalientes.password.length) {
      throw Error("No password");
    }
    const message = fetchLogging(inputsSalientes);
    return message;
  };

  const {
    inputsSalientes,
    handleInputChange,
    handleSubmit,
  } = useSignUpForm(login, { email: "", password: "" });

  const store = useStores();

  return (
    <Container>
      <LoginLogo src={require("../utils/logoSombra@2x.png")} />
      <FormContainer>
        <form onSubmit={(e) => {
          const warning = handleSubmit(e);
          store.updateWarning(warning);
          }}>
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
          <StyledButtonLogin text="ENTRAR" type="submit" />
        </form>
        <TextLogin>
          <span>¿No estás registrado?</span>
          <StyledLink to="/signup">Registrate aquí</StyledLink>
        </TextLogin>
        <TextLogin>
          <span>¿Olvidaste la clave?</span>
          <StyledLink to="/forgotP">Ingresa aquí</StyledLink>
        </TextLogin>
      </FormContainer>
    </Container>
  );
}
