import React from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
import {
  Container,
  LoginImage,
  ButtonContainer
} from "../../styles/LoginStyles";

export default function Login() {
  return (
    <Container>
      <div>LOGO</div>
      <div>
        <form action="">
          <div>
            <LoginImage src="https://imageog.flaticon.com/icons/png/512/20/20061.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" />
            <Input placeholder="Correo electrónico" type="email" />
          </div>
          <div>
            <LoginImage src="https://freeiconshop.com/wp-content/uploads/edd/lock-outline.png" />
            <Input placeholder="Contraseña" type="password" />
          </div>
          <ButtonContainer>
            <Button text="ENTRAR" />
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
