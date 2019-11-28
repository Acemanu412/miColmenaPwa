import axios from "axios";
import React from "react";
import { useForm } from "../hooks/formHook";

import {
  Container,
  FormContainer,
  InputContainer,
  LoginCandado,
  LoginLogo,
  LoginSobre,
  StyledButtonLogin,
  StyledForm,
  StyledInputLogin,
  StyledLink,
  TextLogin,
} from "../styles/LoginStyles";

export default function Login() {
  const login = () => {
    console.log("LOGIN");
    if (!inputsSalientes.password.length) {
      throw Error("No password");
    }
    return axios
      .post("http://localhost:2222/api/user/session", {
        email: inputsSalientes.email,
        password: inputsSalientes.password,
      })
      .then((res: any) => res.data)
      .then((data) => {
        alert(`Usuario logueado!
           Email: ${inputsSalientes.email}
           Password: ${inputsSalientes.password}`);
        console.log(data);
      })
      .catch((err) => {
        alert(`Invalid entry: ${err.response.data}`);
        console.log(err);
      });
  };

  const { inputsSalientes, handleInputChange, handleSubmit } = useForm(login, {
    email: "",
    password: "",
  });

  return (
    <Container>
      <LoginLogo src={require("../utils/logoSombra@2x.png")} />
      <FormContainer>
        <StyledForm onSubmit={handleSubmit}>
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
        </StyledForm>
        <TextLogin>
          <span>¿No estás registrado? </span>
          <StyledLink to="/signup">Registrate aquí</StyledLink>
        </TextLogin>
        <TextLogin>
          <span>¿Olvidaste la clave? </span>
          <StyledLink to="/forgotP">Ingresa aquí</StyledLink>
        </TextLogin>
      </FormContainer>
    </Container>
  );
}
