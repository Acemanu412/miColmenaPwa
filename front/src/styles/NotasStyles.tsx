import styled from "styled-components";

import { color } from "../themes";

const { negro } = color;

export const NotasContainer = styled.div`
  margin-top: 3rem;
  padding: 1rem 2rem;
`;

export const TextoNotas = styled.div`
  font-weight: bold;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

export const ImagenGrabacion = styled.img`
  height: 4rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

// export const ImagenContainer: any = styled.div`
//     height: 4rem;
//     width: 4rem;
//     margin-left: auto;
//     margin-right: auto;
//     margin-bottom: 3rem;
//     &:after {
//         content: "Toque para grabar";
//         font-weight: bold;
//         font-size: 0.8rem;
//         position: absolute;
//         margin: 2rem;
//         margin-top: 1rem;
//         left: 5.5rem;
//     }
// }
// `;

export const TextoImagenGrabacion = styled.div``;

export const InputNotas: any = styled.textarea`
  box-shadow: 0px 0px 3px;
  border-color: transparent;
  width: 85vw;
  outline: none;
  border-radius: 2px;
`;

export const Separador: any = styled.div`
  heigth: 1rem;
  border: 1px solid ${negro};
`;
