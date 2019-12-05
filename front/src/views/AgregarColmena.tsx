import React from "react";

import { ColmenaOption } from "../components/ColmenaOption";
import {
  LogoYellowBanner,
  SpanBanner,
  WrapperDivForImages,
  YellowBanner
} from "../styles/AgregarColmenaStyles";
import { NavBar } from "./NavBar";

export const AgregarColmena: React.FC = () => {
  return (<div>
    <NavBar />
    <YellowBanner>
      <WrapperDivForImages>
        <LogoYellowBanner src={require("../utils/ajustes@2x.png")} />
      </WrapperDivForImages>
      <SpanBanner>Agregar una colmena</SpanBanner>
    </YellowBanner>
    <ColmenaOption text="Añadir colmena con dispositivo"
      imageSource={require("../utils/agregarCuaderno@2x.png")} />
    <ColmenaOption text="Añadir colmena estándar"
      imageSource={require("../utils/agregarColmena@2x.png")} />
    <hr style={{ border: "1px solid lightgrey" }} />
  </div>
  );
};
