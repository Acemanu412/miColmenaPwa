import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";
import { Input } from "../components/Input";

export const StyledButtonLogin = styled(Button)`
  background-color: #ffd24e;
  color: #0056a2;
  font-weight: bold;
  border-radius: 0.3rem;
  width: 15rem;
  height: 2rem;
  margin-top: 4rem;
`;

export const StyledInputLogin = styled(Input)`
  color: #ffffff;
  border: solid 0px
  background: rgba(0, 0, 0, 0);
  border-bottom: 2px solid #ffffff
  height: fit-content
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
  display: flex;
  flex: 0, 5;
  url: ${require("../utils/logoSombra@2x.png")};
  width: 80%;
`;

export const LoginSobre = styled.img`
  height: 1.2rem;
  margin-right: 1rem;
`;

export const LoginCandado = styled.img`
  height:2rem;
  margin-top: 0.5rem
  margin-right: 1.4rem;
  margin-bottom: 1rem
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  background-image: url(${require("../utils/inicioFondo@2x.png")})};
  height: 100vh;
  background-size: cover;
  padding-top: 30%;
`;

export const InputContainer = styled.div`
display:flex
flex:1
justify-content: center;
margin-top: 2rem
height: 1%
`;

export const TextLogin = styled.div`
  color: #ffffff;
  margin: 1rem;
  font-size: 0.8rem;
`;
