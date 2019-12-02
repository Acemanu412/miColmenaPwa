import React from "react";
import {
  ButtonColmenasContainer,
  ColmenasContainer,
  DataColmenaContainer,
  ImageColmenasContainer1,
  ImageColmenasContainer2,
  StyledBotonAgregarColmenas,
} from "../styles/ColmenasStyles";

export const Colmenas: React.FC = () => {
  return (
    <ColmenasContainer>
      <ImageColmenasContainer1 />
      <DataColmenaContainer>
        Nombre de Colmena A
      </DataColmenaContainer>
      <ImageColmenasContainer2 />
      <DataColmenaContainer>
        Nombre de Colmena B
      </DataColmenaContainer>

      <ButtonColmenasContainer>
        <StyledBotonAgregarColmenas text="Agregar Colmena" />
      </ButtonColmenasContainer>

    </ColmenasContainer>
  )
};
