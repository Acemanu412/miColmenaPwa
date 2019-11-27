import styled from "styled-components";
import { Input } from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export const StyledButtonLogin = styled(Button)`
  background-color: #ffd24e;
  color: #0056a2;
  font-weight: bold;
  border-radius: 0.3rem;
  width: 16rem;
  height: 2rem;
`;

export const StyledInputLogin = styled(Input)`
  color: #ffffff;
  border: solid 0px
  background: rgba(0, 0, 0, 0.1);
  border-bottom: 2px solid #ffffff
  height: fit-content
  width: 100%;
  ::placeholder {
    color: #ffffff;
  }
  align-self: center;

`;

export const StyledLink = styled(Link)`
  color: #ffd24e;
  text-decoration:none
}
`;

export const LoginLogo = styled.img`
  url: ${require("../utils/logoSombra@2x.png")};
  height: 27%;
  margin: 4rem;
  padding-top: 4rem;
`;

export const LoginSobre = styled.img`
  width: 1.5rem;
  margin-right: 1rem;
`;

export const LoginCandado = styled.img`
  width:1.3rem;
  margin-top: 0.5rem
  margin-right: 1.4rem;
  margin-bottom: 1rem
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

export const InputContainer = styled.div`
display:flex  
justify-content: center;
margin-top: 2rem
height: 1%
`;

export const TextLogin = styled.div`
  color: #ffffff;
  margin-bottom: 3rem;
  font-size: 0.8rem;
`;
export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
