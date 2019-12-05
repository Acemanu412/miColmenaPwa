import React from "react";
import { Link } from "react-router-dom";

import {
  ButtonColmenasContainer,
  ColmenasContainer,
  DataColmenaContainer,
  ImageColmenasContainer1,
  ImageColmenasContainer2,
  StyledBotonAgregarColmenas,
} from "../styles/ColmenasStyles";

export const Colmenas: React.FC = (props) => {
  return (
    <ColmenasContainer>

      <Link
        to="/vistaColmena"
        style={{ textDecoration: "none", color: "black" }}
      >
        <DataColmenaContainer>
          <ImageColmenasContainer1 />
          Nombre de Colmena A
        </DataColmenaContainer>
      </Link>
      <Link
        to="/vistaColmena"
        style={{ textDecoration: "none", color: "black" }}
      >
        <DataColmenaContainer>
          <ImageColmenasContainer2 />
          Nombre de Colmena B
        </DataColmenaContainer>
      </Link>

      <ButtonColmenasContainer>
        <Link
          to="/agregarColmena"
        >
          <StyledBotonAgregarColmenas text="Agregar Colmena" />
        </Link>
      </ButtonColmenasContainer>

    </ColmenasContainer>
  );
};
