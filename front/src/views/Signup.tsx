import React from "react";
import {observer} from "mobx-react"
import { useSignUpForm } from "../hooks/loginHook";
import {fetchRegister} from "../api"

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


const Signup: React.FC = observer(() => {
  // para que se vuelva a montar el compponente, ante los cambios en el state

  const registroAxios = () => {
    fetchRegister(inputsSalientes.username, inputsSalientes.email, inputsSalientes.password);
  };

  const { inputsSalientes, handleInputChange, handleSubmit } = useSignUpForm(registroAxios,
    { username: "", email: "", password: "" });

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
)