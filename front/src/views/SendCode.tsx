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
  StyledInputLogin,
} from "../styles/LoginStyles";

function SendCode() {
  const login = () => {
    return null;
  };

  const {
    // inputsSalientes,
    handleInputChange,
    handleSubmit,
  } = useForm(login, { email: "", codigo: "" });

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
