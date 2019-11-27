import { observer } from "mobx-react";
import React from "react";
import styled from "styled-components";
import { fetchRegister } from "../api";
import { useSignUpForm } from "../hooks/loginHook";

const ContainerCentrado = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  justify-content: center;
  flex-direction: column;
  // tslint:disable-next-line: no-var-requires
  background-image: url(${require("../utils/Rectangle.png")});
  background-size: cover;
`;

const Img = styled.img.attrs({ src: require("../utils/Rectangle4.png") })`
  object-fit: scale-down;
  display: flex;

  align-self: center;

  width: 300px;
  height: 60vh;:10.100.0.49
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

const Signup: React.FC = observer(() => {
  // para que se vuelva a montar el compponente, ante los cambios en el state

  const registroAxios = () => {
    fetchRegister(inputsSalientes.username, inputsSalientes.email, inputsSalientes.password);
  };

  const { inputsSalientes, handleInputChange, handleSubmit } = useSignUpForm(registroAxios,
    { username: "", email: "", password: "" });

  return (
    <form
      onSubmit={handleSubmit}
    >
      <ContainerCentrado>
        <Img></Img>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
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
