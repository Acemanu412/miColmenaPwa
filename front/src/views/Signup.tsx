import React from "react";
import { fetchRegister } from "../api";
import { useForm } from "../hooks/formHook";
import { useStores } from "../hooks/useStore";
import { StyledWarning } from "../styles/GlobalStyles";
import {
  Container,
  FormContainer,
  InputContainer,
  LoginAvatar,
  LoginCandado,
  LoginLogo,
  LoginSobre,
  StyledButtonLogin,
  StyledForm,
  StyledInputLogin,
  StyledLink,
  TextLogin,
} from "../styles/LoginStyles";

export default function Signup(props) {
  // para que se vuelva a montar el componente, ante los cambios en el state
  const store = useStores();

  const registroAxios = () => {
    store.updateWarning({ message: "Estamos mandandote un mail..." });
    fetchRegister(
      inputsSalientes.username,
      inputsSalientes.email,
      inputsSalientes.password,
      inputsSalientes.telefono,
    ).then((data) => {
      if (data.response) {
        store.updateWarning({ message: data.response.data });
      } else {
        store.updateHomeMessage({ message: "Un mail ha sido enviado con un link para activar tu cuenta."});
        props.history.push("/");
      }
    });
  };

  const {
    inputsSalientes,
    handleInputChange,
    handleSubmit,
  } = useForm(registroAxios, { email: "",
                               password: "",
                               telefono: "",
                               username: "" });

  return (
    <Container>
      <LoginLogo src={require("../utils/logoSombra@2x.png")} />

      <FormContainer>
        <StyledForm onSubmit={handleSubmit}>
          <InputContainer>
            <LoginAvatar src={require("../utils/avatar@2x.png")} />
            <StyledInputLogin
              placeholder="Nombre de usuario"
              type="username"
              name="username"
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
              onChange={(e) => {
                handleInputChange(e);
                store.updateWarning({ message: "" });
              }}
              value={inputsSalientes.email}
              required={true}
            />
          </InputContainer>

          <InputContainer>
            <StyledInputLogin
              placeholder="Teléfono (Opcional)"
              type="tel"
              name="telefono"
              onChange={(e) => {
                handleInputChange(e);
                store.updateWarning({ message: "" });
              }}
              value={inputsSalientes.telefono}
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
          <StyledWarning />

          <StyledButtonLogin text="REGISTRAR" type="submit" />
        </StyledForm>

        <TextLogin>
          <span>¿Estás registrado?</span>
          <StyledLink to="/"> Ingresa aquí</StyledLink>
        </TextLogin>
      </FormContainer>
    </Container>
  );
}
