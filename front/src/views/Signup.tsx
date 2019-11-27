import { observer } from "mobx-react";
import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";

import { useSignUpForm } from "../hooks/loginHook";

import { fetchRegister } from "../api"


import { useStores } from "../hooks/useStore";

import {
  ButtonContainer,
  Container,
  InputContainer,
  LoginCandado,
  LoginLogo,
  LoginSobre,
  StyledButtonLogin,
  StyledInputLogin,
  StyledLink,
  TextLogin
} from "../styles/LoginStyles";

const ContainerCentrado = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  justify-content: center;
  flex-direction: column;
  background-image: url(${require("../utils/Rectangle.png")});
  background-size: cover;
`;
const Input = styled.input`
  margin: 20px;
  font-family: roboto;
  color: white;
  background: transparent;
  border: 0;
  border-bottom: 2px solid white;
  ::placeholder {
    color: white;
  }
`;
const Img = styled.img.attrs({ src: require("../utils/Rectangle4.png") })`
  object-fit: scale-down;
  display: flex;

  align-self: center;

  width: 300px;
  height: 60vh;
`;
const Candado = styled.img.attrs({ src: require("../utils/candado.png") })`
  object-fit: scale-down;
  width: 30px;
`;

const Button = styled.button`
  display: flex;
  align-self: center;
  margin: 20px;
  border: none;
  background-color: #fed24d;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 12px;
  font-family: roboto;
  color: solid white;
  width: 100px;
`;
const Sobre = styled.img.attrs({ src: require("../utils/sobre.png") })`
  object-fit: scale-down;
  width: 30px;
`;

const Signup: React.FC = observer(() => {
  //para que se vuelva a montar el compponente, ante los cambios en el state

  const store = useStores();

  const registroAxios = () => {
    fetchRegister(inputsSalientes.username, inputsSalientes.email, inputsSalientes.password);
  }

  const { inputsSalientes, handleInputChange, handleSubmit } = useSignUpForm(registroAxios, { username: "", email: "", password: "" });


  return (
    <form
      onSubmit={handleSubmit}
    >
      <ContainerCentrado>
        <Img></Img>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
        ></div>

        <input
          name="username"
          placeholder="Nombre de usuario"
          type="text"
          onChange={handleInputChange}
          value={inputsSalientes.username}
          required={true}
        />

        <input
          name="email"
          placeholder="Correo electronico"
          type="email"
          onChange={handleInputChange}
          value={inputsSalientes.email}
          required={true}
        />


        <input
          name="password"
          placeholder="Constrasena"
          type="password"
          onChange={handleInputChange}
          value={inputsSalientes.password}
          required={true}
        />



        <Button>REGISTRARTE</Button>
      </ContainerCentrado>
    </form>
  );
});

export default Signup;
