import React from "react";
import {

  ColmenasContainer,
  ImageColmenasContainer1,
  ImageColmenasContainer2,
  DataColmenaContainer,
  StyledBotonAgregarColmenas,
  ButtonColmenasContainer,
} from "../styles/ColmenasStyles";
import { Link } from "react-router-dom";

export const Colmenas: React.FC = () => {
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
        <StyledBotonAgregarColmenas text="Agregar Colmena" />
      </ButtonColmenasContainer>

    </ColmenasContainer>
  );
};
