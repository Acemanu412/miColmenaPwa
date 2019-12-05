import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  background-size: cover;
  position: absolute;
  top: 9vh;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
display:flex;
flex-direction:row;
align-items:center;
background-color: #F9F9F9
height: 10vh;



`;

export const Panel = styled.img.attrs({
  src: require("../utils/colmenaGris@2x.png"),
})`
  height: 90%;
`;
export const BoldText = styled.p`
  color: #999999;
  font-weight: 63;

  padding-left: 3%;
`;
export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-size: cover;

  padding: 6%;
`;

export const DataRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 3%;
  border-bottom: solid;
  border-bottom-width: thin;
  border-bottom-color: #e0e0e0;
  margin-bottom: 3%;
`;
export const Calendar = styled.img.attrs({
  src: require("../utils/calendar@2x.png"),
})`
  object-fit: contain;

  height: 5vh;
  padding-right: 4%;
`;
export const ContainerCentrado = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6%;
  align-items: center;
`;

export const Microfono = styled.img.attrs({
  src: require("../utils/microfonoAmarillo@2x.png"),
})`
  object-fit: contain;
  height: 4rem;
`;
