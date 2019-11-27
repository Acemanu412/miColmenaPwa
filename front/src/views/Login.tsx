import React from "react";
import { useSignUpForm } from "../hooks/loginHook";
import { fetchRegister } from "../api"

import {
  ButtonContainer,
  Container,
  InputContainer,
  LoginCandado,
  LoginLogo,
  LoginSobre,
  StyledButtonLogin,
  StyledInputLogin,
  StyledLink,
  TextLogin
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

const array= [3,4,2,8,9]


 const diff = (array) => {
  let menor = array[0];
  let mayor = array[0]

  for(let i =0; i < array.length; i++) {
    if(array[i] <= menor) {
        menor = array[i]
    }
    else if(array[i] >= mayor) {
      mayor = array[i]
    }
  }

  return mayor - menor

 }