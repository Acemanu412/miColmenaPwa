import React from "react";
import useForm from "react-hook-form";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import { useStores } from "../../hooks/useStore";
import { SignUpFormProperties } from "../../store";

import Button from "../../components/Button";

import {
  ButtonContainer,
  Container,
  InputStyles
} from "../../styles/SignupStyles";

const Signup: React.FC = () => {
  return (
    <Container>
      <form>
        <Input
          type="text"
          placeholder="Nombre de usuario"
          name="Nombre de usuario"
        />
        <Input
          type="email"
          placeholder="Correo electronico"
          name="Correo electronico"
        />

        <ButtonContainer>
          <Button text="ENTRAR" type="submit" />
        </ButtonContainer>

        {/* <button
          onClick={e => {
            e.preventDefault();
          }}
        >
          Registrarte
        </button> */}
      </form>

      <div>
        <span>¿Ya tienes una cuenta?</span>
        <Link to="/login">Ingresa aqui</Link>
      </div>
    </Container>
  );
};

export default Signup;
