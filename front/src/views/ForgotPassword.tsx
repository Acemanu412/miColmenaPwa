import React from "react";

import styled from "styled-components";

const ContainerCentrado = styled.div`
  display: flex;
  justify-content: center;
  align-content: stretch;
  flex-direction: column;
  background-color: #0056a3;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;
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
const Label = styled.label`
  margin: 20px;
  font-family: roboto;
  color: white;
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
      <Label>EMAIL:</Label>
      <Input></Input>
      <Button>SUBMIT</Button>
    </ContainerCentrado>
  );
}
