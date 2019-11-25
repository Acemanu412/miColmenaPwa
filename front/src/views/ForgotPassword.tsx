import React from "react";

import styled from "styled-components";

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
const Img = styled.img`
  object-fit: scale-down;
  background-image: url(${require("../utils/Rectangle4.png")});
  max-width: 100%;
  height: auto;
  
`;

const Button = styled.button`
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

export default function ForgotPassword() {
  return (
    <ContainerCentrado>
      <Img></Img>
      <Input></Input>
      <Button>SUBMIT</Button>
    </ContainerCentrado>
  );
}
