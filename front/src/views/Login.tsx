import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSignUpForm } from "../hooks/loginHook";

import Input from "../components/Input";

import Button from "../components/Button";

import { ButtonContainer, Container, LoginImage } from "../styles/LoginStyles";

export default function Login() {
  const signup = () => {
    alert(`User Created!
           Email: ${inputs.email}
           Password: ${inputs.password}`);
  };

  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(signup);

  return (
    <Container>
      <div>LOGO</div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <LoginImage src="https://imageog.flaticon.com/icons/png/512/20/20061.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" />
            <Input
              placeholder="Correo electrónico"
              type="email"
              name="email"
              onChange={handleInputChange}
              value={inputs.email}
              required="required"
            />
          </div>
          <div>
            <LoginImage src="https://freeiconshop.com/wp-content/uploads/edd/lock-outline.png" />
            <Input
              placeholder="Contraseña"
              type="password"
              name="password"
              onChange={handleInputChange}
              value={inputs.password}
              required="required"
            />
          </div>
          <ButtonContainer>
            <Button text="ENTRAR" type="submit" />
          </ButtonContainer>
        </form>
      </div>
      <div>
        <span>¿No estás registrado?</span>
        <Link to="/">Registrate aquí</Link>
      </div>
      <div>
        <span>¿Olvidaste la clave?</span>
        <Link to="/">Ingresa aquí</Link>
      </div>
    </Container>
  );
}
