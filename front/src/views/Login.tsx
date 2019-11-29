import React from "react";
import { fetchLogging } from "../api/";
import { useForm } from "../hooks/formHook";
import { useStores } from "../hooks/useStore";
import { StyledWarning } from "../styles/GlobalStyles";
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
    if (!inputsSalientes.password.length) {
      throw Error("No password");
    }
    const warning = fetchLogging(inputsSalientes);
    return warning;
  };

  const { inputsSalientes, handleInputChange, handleSubmit } = useForm(login, {
    email: "",
    password: "",
  });

  const store = useStores();

  return (
    <Container>
      <LoginLogo src={require("../utils/logoSombra@2x.png")} />
      <FormContainer>
        <StyledForm onSubmit={async (e) => {
          const warning = await handleSubmit(e);
          console.log("warning", warning);
          if (warning !== "") { store.updateWarning(warning); }
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
          <InputContainer >
            <LoginCandado src={require("../utils/candado@2x.png")} />
            <StyledInputLogin
              // style={{ marginBottom: 0 }}
              placeholder="Contraseña"
              type="password"
              name="password"
              onChange={handleInputChange}
              value={inputsSalientes.password}
              required={true}
            />
          </InputContainer>
          <StyledWarning />
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
