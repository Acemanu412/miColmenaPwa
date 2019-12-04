import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-size: cover;
  position: relative;
  top: 5vh;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 4;
`;
export const NameContainer = styled.div`
  margin-top: 10%;
`;
export const ContainerSaludable = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Saludable1 = styled.div`
  display: flex;
  justify-content: center;
  background-color: #0056a2;
  flex: 1;
`;
export const Saludable2 = styled.div`
  display: flex;
  align-items: center;
  background-color: #999999;
  flex: 5;
  padding-left: 4%;
`;
export const SemanaContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  font-size: 0.65rem;
`;
export const EnlaceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #ffd24e;
`;

export const BotonesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-size: cover;
`;
export const DataRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
`;
export const DataColumn = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;
  padding: 2%;
`;
export const DataRow2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Abejas = styled.img.attrs({
  src: require("../utils/abejas@2x.png"),
})`
  background-size: cover;
  width: 30%;
  flex: 1;
`;
export const AbejaBlanca = styled.img.attrs({
  src: require("../utils/abejaBlanca@2x.png"),
})`
  object-fit: contain;
  width: 1.3rem;
`;
export const Enlace = styled.img.attrs({
  src: require("../utils/enlace@2x.png"),
})`
  object-fit: contain;
  width: 1.3rem;
`;

export const Audio = styled.img.attrs({
  src: require("../utils/sonidaAmarillo@2x.png"),
})`
  object-fit: contain;

  width: 1.3rem;
`;
export const Button2 = styled.button`
  background-color: #ffffff;
  flex: 1;
  width: 7rem;
  height: 3rem;
  border-width: 0.3;
  outline: none;
`;

export const Button = styled.button`
  background-color: #f9f9f9;
  flex: 1;
  width: 7rem;
  height: 2rem;
  border-color: #dddddd;
  border-width: 0.5;
  outline: none;
  &:focus {
    background-color: white;
  }
`;

export const Corazon = styled.img.attrs({
  src: require("../utils/corozonGris@2x.png"),
})`
  object-fit: contain;
  width: 1.3rem;
`;
export const Libro = styled.img.attrs({
  src: require("../utils/libroGris@2x.png"),
})`
  object-fit: contain;
  width: 1.3rem;
`;
export const BoldText = styled.p`
  color: #999999;
  font-weight: 63;
  flex: 1;
`;
export const AbejaAmarilla = styled.img.attrs({
  src: require("../utils/abejaAmarilla@2x.png"),
})`
  object-fit: contain;
  width: 1rem;
  height: 1.3rem;
`;
export const AbejaDormida = styled.img.attrs({
  src: require("../utils/abejaDormida@2x.png"),
})`
  object-fit: contain;
  width: 1rem;
  height: 1.3rem;
`;
export const Lightening = styled.img.attrs({
  src: require("../utils/Lightening@2x.png"),
})`
  object-fit: contain;
  width: 1rem;
  height: 1.3rem;
`;
export const Balanza = styled.img.attrs({
  src: require("../utils/escala@2x.png"),
})`
  object-fit: contain;
  width: 1rem;
  height: 1.3rem;
`;
export const Oreja = styled.img.attrs({
  src: require("../utils/oreja@2x.png"),
})`
  object-fit: contain;
  width: 1rem;
  height: 1.3rem;
`;
export const Termometro = styled.img.attrs({
  src: require("../utils/termometro@2x.png"),
})`
  object-fit: contain;
  width: 1rem;
  height: 1.3rem;
`;
export const PresionAtm = styled.img.attrs({
  src: require("../utils/presionAtmo@2x.png"),
})`
  object-fit: contain;
  width: 1rem;
  height: 1.3rem;
`;
export const Ubicacion = styled.img.attrs({
  src: require("../utils/ubicacion@2x.png"),
})`
  object-fit: contain;
  width: 1rem;
  height: 1.3rem;
`;
export const Viento = styled.img.attrs({
  src: require("../utils/viento@2x.png"),
})`
  object-fit: contain;
  width: 1rem;
  height: 1.3rem;
`;
export const WiFi = styled.img.attrs({
  src: require("../utils/senal@2x.png"),
})`
  object-fit: contain;
  width: 1rem;
  height: 1.3rem;
`;
export const Sol = styled.img.attrs({
  src: require("../utils/sol@2x.png"),
})`
  object-fit: contain;
  width: 1rem;
  height: 1.3rem;
`;
export const Gotas = styled.img.attrs({
  src: require("../utils/gotasDeLluvia@2x.png"),
})`
  object-fit: contain;
  width: 1rem;
  height: 1.3rem;
`;

export const Escala = styled.img.attrs({
  src: require("../utils/escala2@2x.png"),
})`
  object-fit: contain;
  width: 1rem;
  height: 1.3rem;
`;
export const DireccionViento = styled.img.attrs({
  src: require("../utils/direccionViento@2x.png"),
})`
  object-fit: contain;
  width: 1.7rem;
  height: 2rem;
`;
export const Bateria = styled.img.attrs({
  src: require("../utils/bateria@2x.png"),
})`
  object-fit: contain;
  width: 1rem;
  height: 1.3rem;
`;
export const AgregrarRegistro = styled.img.attrs({
  src: require("../utils/agregarCuaderno@2x.png"),
})`
  object-fit: contain;

  height: 20vh;
`;
export const DataContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
`;

export const Dia = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: #999999;
`;
export const Mas = styled.img.attrs({
  src: require("../utils/mas@2x.png"),
})`
  object-fit: contain;
  width: 1.3rem;
`;
export const Menos = styled.img.attrs({
  src: require("../utils/menos@2x.png"),
})`
  object-fit: contain;
  width: 1.3rem;
`;
export const Button3 = styled.button`
  border: none;
  flex: 1;
  background-color: transparent;
  height: 3rem;
  outline: none;

  &:focus {
    background-color: #ffd24e;
  }
`;
