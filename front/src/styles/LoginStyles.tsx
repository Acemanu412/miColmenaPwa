import styled from "styled-components";

import { Link } from "react-router-dom";
import Button from "../components/Button";
import { Input } from "../components/Input";

export const StyledButtonLogin = styled(Button)`
  background-color: #ffd24e;
  color: #0056a2;
  font-weight: bold;
  border-radius: 0.3rem;
  width: 75vw;
  height: 6vh;
`;

export const StyledInputLogin = styled(Input)`
  color: #ffffff;
  border: solid 0px
  background: rgba(0, 0, 0, 0.1);
  ::placeholder {
    color: #ffffff;
  }
`;

export const StyledLink = styled(Link)`
  color: #ffd24e;
  text-decoration:none
}
`;

export const LoginLogo = styled.img`
  url: ${require("../utils/logoSombra@2x.png")};
  height: 17vh;
  margin: 4rem;
  padding-top: 4rem;
`;

export const LoginSobre = styled.img`
  width: 4.5vh;
  margin-right: 1rem;
`;

export const LoginCandado = styled.img`
  width: 4vh;
  margin-top: 0.5rem
  margin-right: 1.4rem;
  padding-bottom: 1.3rem
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url(${require("../utils/inicioFondo@2x.png")})};
  height: 100vh
  background-size: contain;
`;

export const ButtonContainer = styled.div`
  margin: 2rem 5rem 1rem;
`;

export const InputContainer = styled.div`
display:flex;
justify-content: center;
margin-top: 2rem;`;

export const TextLogin = styled.div`
  color: #ffffff;
  margin-bottom: 3rem;
  font-size: 0.8rem;
`;
