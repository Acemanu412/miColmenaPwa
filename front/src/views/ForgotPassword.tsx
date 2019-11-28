import React from "react";
import { postNuevoClave } from "../api";
import { useForm } from "../hooks/formHook";
import { useStores } from "../hooks/useStore";
import { StyledWarning } from "../styles/GlobalStyles";

import {
  Container,
  InputContainer,
  LoginLogo,
  LoginSobre,
  StyledButtonLogin,
  StyledInputLogin,
} from "../styles/LoginStyles";

function ForgotPassword(props) {
  const claveAxios = () => {
    store.updateWarning({message: "Estamos mandandote un correo..."});
    postNuevoClave(inputsSalientes.email).then((data) => {
      // si 'data' tiene un mensage significa que es un error. fijase en api/index para ver como llega 'data'
      if (data.message) {
        store.updateWarning(data);
      } else {
        props.history.push("/");
      }
    });
  };

  const { inputsSalientes, handleInputChange, handleSubmit } = useForm(
    claveAxios,
    { email: "" }
  );

  const store = useStores();

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
          <StyledWarning/>
          <StyledButtonLogin text="ENVIAR" type="submit" />
        </form>
      </div>
    </Container>
  );
}
export default ForgotPassword;
