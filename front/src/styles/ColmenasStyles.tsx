import styled from "styled-components";
import Button from "../components/Button";

export const StyledBotonAgregarColmenas = styled(Button)`
  background-color: #ffd24e;
  color: #0056a2;
  font-weight: bold;
  border-radius: 0.3rem;
  width: 15rem;
  height: 2rem;
  margin-top: 1rem;
  margin-left: 15%;
`;

export const ColmenasContainer = styled.div`
  height: 93vh;
  width: 100%
  margin-top: 14%;
  position: relative;
top: 4vh;
`;

export const ImageColmenasContainer1 = styled.div`
  height: 80%;
  width: 32%;
  background-image: url(${require("../utils/abejas1@2x.png")})};
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 1rem;
  float:left;
  `;

export const ImageColmenasContainer2 = styled.div`

  height: 80%;
  width: 32%;
  background-image: url(${require("../utils/abejas2@2x.png")})};
  background-position: 50% 50%;
  background-size: cover;
  margin: 1rem;
  clear: both;
  float:left;
  `;

export const DataColmenaContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  margin-top: 1rem;
`;

export const ButtonColmenasContainer = styled.div`
  display: flex;
  justify-center: center;
  align-items: center;
  width: 100%;
`;
