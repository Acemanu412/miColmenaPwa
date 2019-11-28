import React from "react";
import { ColmenasContainer, ImageColmenasContainer1, ImageColmenasContainer2, DataColmenaContainer, StyledBotonAgregarColmenas, ButtonColmenasContainer } from "../styles/ColmenasStyles";

export const Colmenas: React.FC = () => {
  return (
    <ColmenasContainer>.
      <ImageColmenasContainer1>
      </ImageColmenasContainer1>
      <DataColmenaContainer>
        Nombre de Colmena A
      </DataColmenaContainer>
      <ImageColmenasContainer2>
      </ImageColmenasContainer2>
      <DataColmenaContainer>
        Nombre de Colmena B
      </DataColmenaContainer>
      <ButtonColmenasContainer>
        <StyledBotonAgregarColmenas text="Agregar Colmena" />
      </ButtonColmenasContainer>
    </ColmenasContainer>
  )
};
