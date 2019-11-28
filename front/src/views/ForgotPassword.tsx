import React from "react";
<<<<<<< HEAD
=======
import { postNuevoClave } from "../api";
import { useForm } from "../hooks/formHook";
>>>>>>> 693b5eab603075d056cd19f12abfe6498ef20c86


import {
  Container,
  InputContainer,
  LoginLogo,
  LoginSobre,
  StyledButtonLogin,
  StyledInputLogin,
} from "../styles/LoginStyles";

function ForgotPassword() {
  const claveAxios = () => {
    postNuevoClave(inputsSalientes.email);
  };

  const {
    inputsSalientes,
    handleInputChange,
    handleSubmit,
<<<<<<< HEAD
  } = useSignUpForm(login, { email: "" });
=======
  } = useForm(claveAxios, { email: "" });
>>>>>>> 693b5eab603075d056cd19f12abfe6498ef20c86

  return (
    <Container>
      <LoginLogo src={require("../utils/logoSombra@2x.png")} />
      <div>
        <form onSubmit={handleSubmit}>
          <InputContainer>
            <LoginSobre src={require("../utils/sobre@2x.png")} />
            <StyledInputLogin
              placeholder="Ingrese su correo electrónico"
              type="email"
              name="email"
              onChange={handleInputChange}
              value={inputsSalientes.email}
              required={true}
            />
          </InputContainer>

          <StyledButtonLogin text="ENVIAR" type="submit" />
        </form>
      </div>
    </Container>
  );
}
export default ForgotPassword;
