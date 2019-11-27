import React from "react";

import styled from "styled-components";

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
const Candado = styled.img.attrs({ src: require("../utils/candado.png") })`
  object-fit: scale-down;
  width: 30px;
`;

export default function NewPassword() {
  return (
    <ContainerCentrado>
      <Img></Img>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div>
          <Candado />
          <Input></Input>
        </div>
        <div>
          <Candado />
          <Input></Input>
        </div>
      </div>

      <Button>SUBMIT</Button>
    </ContainerCentrado>
  );
}
