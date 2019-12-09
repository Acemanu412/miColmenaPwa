import styled from "styled-components";

import { Input } from "../components/Input";
import { color } from "../themes";

const { amarillo } = color;

export const StyledForm = styled.form`
  background-color: #f9f9f9;
`;

export const TextoAmarillo = styled.span`
  display: block;
  color: ${amarillo};
  font-weight: bold;
  font-size: 0.9rem;
`;

export const FormContent = styled.div`
  margin-bottom: 1rem;
  border-bottom: 1px solid;
  border-top: 1px solid;
  border-color: #F2F0F0
  padding: 2rem;
  width: 100%;
  background-color: #ffff
`;

export const StyledInput = styled(Input)`
  margin-top: 1rem;
  width: 70vw;
  height: 5vh;
  outline: none;
  border-radius: 2px;
  border: 1px solid;
  padding: 0.5rem;
  border-color: #e5e3e3;
`;

export const StyledSelect = styled.select`
  width: 70vw;
  height: 4vh;
  outline: none;
  border-radius: 2px;
  border: 1px solid;
  padding-left: 0.5rem;
  border-color: #e5e3e3;
  background-color: #ffff;
`;

export const NotaInput = styled.span`
  display: block;
  font-size: 0.7rem;
  padding-top: 0.5rem;
  color: #aaa7a7;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledImage = styled.img`
  height: 12vh;
`;
