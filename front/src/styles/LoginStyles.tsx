import styled from "styled-components";
import Input from "../components/Input";

export const LoginImage = styled.img`
  width: 20px;
`;

export const Container = styled.div`
  display:flex  
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url(${require("../utils/inicioFondo@2x.png")})};
  height: 100%
`;

export const ButtonContainer = styled.div`
display:flex  
align-items: center;
`;

export const StyledInputLogin = styled(Input)`
  color: #555555;
  font: "Montserrat";
  font-size: 80px;
  ::-webkit-input-placeholder {
    color: white;
    opacity: 1;
  }
`;
