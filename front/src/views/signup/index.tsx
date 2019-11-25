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
<<<<<<< HEAD:src/views/signup/index.tsx
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
=======
  // const store = useStores();
  // console.log(store);
  return (
    <form>
      <input
        type="text"
        placeholder="Nombre de usuario"
        name="Nombre de usuario"
        // onChange={e => {
        //   console.log("aqui", e.target.value);
        //   store.handleChange(SignUpFormProperties.email, e.target.value);
        // }}
      />

      <button
      // onClick={e => {
      //   e.preventDefault();
      //   console.log(store);
      // }}
      >
        Registrarte
      </button>
>>>>>>> c28fd48e7d20b9ddc8b0c32ac2143b94f2075f8d:front/src/views/signup/index.tsx

      <div>
        <span>¿Ya tienes una cuenta?</span>
        <Link to="/login">Ingresa aqui</Link>
      </div>
    </Container>
  );
};

export default Signup;
