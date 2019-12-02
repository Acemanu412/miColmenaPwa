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
  background: transparent;
  border-bottom: 2px solid #ffffff
  height: fit-content
  width: 12rem;
  ::placeholder {
    color: #ffffff;
  };
  align-self: center;
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
    -webkit-transition-delay: 9999s;
  }

`;

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StyledLink = styled(Link)`
  color: #ffd24e;
  text-decoration:none
}
`;

export const LoginLogo = styled.img`
  display: flex;
  flex: 0.5;
  url: ${require("../utils/logoSombra@2x.png")};
  width: 80%;
  object-fit: contain;
  @media (min-width: 700px) {
    width: 30%;
  }
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
export const LoginAvatar = styled.img`
  width:1.3rem;
  margin-top: 0.5rem
  margin-right: 1.4rem;
  margin-bottom: 1rem
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  background-image: url(${require("../utils/inicioFondo@2x.png")});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  height: 100vh;
  overflow: scroll;
  background-size: cover;
  padding-top: 30%;
  @media (min-width: 700px) {
    padding-top: 0;
    justify-content: center;
  }
`;
export const ContainerActivacion = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url(${require("../utils/inicioFondo@2x.png")});
  background-size: cover;
  height: 100vh;
  overflow: scroll;
  @media (min-width: 700px) {
    padding-top: 0;
    justify-content: center;
  }
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const InputContainer = styled.div`
display:flex
flex:1
justify-content: center;
margin-top: 2rem
height: 1%
width:100%
margin-bottom: 3%;
`;
export const InputContainerPassword = styled.div`
display:flex
flex:1
justify-content: center;
margin-top: 2rem
height: 1%
width:100%
margin-bottom: 10%;
`;
export const TextLogin = styled.div`
  color: #ffffff;
  margin: 1rem;
  font-size: 10px;
`;
