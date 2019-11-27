import React from "react";

import styled from "styled-components";
import { observer } from "mobx-react";

import { useStores } from "../hooks/useStore";

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
  margin: 4vw;
  font-family: roboto;
  color: white;
  background: transparent;
  border: 0;
  border-bottom: 0.05vh solid white;
  ::placeholder {
    color: white;
  }
`;
const Img = styled.img.attrs({ src: require("../utils/Rectangle4.png") })`
  object-fit: scale-down;
  display: flex;

  align-self: center;

  width: 70vw;
  height: 60vh;
`;
const Sobre = styled.img.attrs({ src: require("../utils/sobre.png") })`
  object-fit: scale-down;
  width: 7vw;
`;

const Button = styled.button`
  display: flex;
  align-self: center;
  margin: 3vw;
  border: none;
  background-color: #fed24d;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 2vw;
  font-family: roboto;
  color: solid white;
  width: 25vw;
`;
const ForgotPassword: React.FC = observer(() => {
  const store = useStores();
  console.log(store);

  return (
    <ContainerCentrado>
      <Img></Img>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Sobre />
        <Input onChange={e => store.forgotP.handleEmail(e)}></Input>
      </div>

      <Button>SUBMIT</Button>
    </ContainerCentrado>
  );
});
export default ForgotPassword;
