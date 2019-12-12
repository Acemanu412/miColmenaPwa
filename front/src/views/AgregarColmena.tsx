import { observer } from "mobx-react";
import React from "react";
import { RouteComponentProps } from "react-router-dom";

import { ColmenaOption } from "../components/ColmenaOption";
import { useStores } from "../hooks/useStore";
import {
  LogoYellowBanner,
  SpanBanner,
  WrapperDivForImages,
  YellowBanner,
} from "../styles/AgregarColmenaStyles";
import { NavBar } from "./NavBar";

export const AgregarColmena: React.FC<RouteComponentProps> = observer((props) => {
  const store = useStores();

  return (<div>
    <NavBar />
    {store.user || (!store.user && store.isFetchingUser) ?
      <div>
        <YellowBanner>
          <WrapperDivForImages>
            <LogoYellowBanner src={require("../utils/ajustes@2x.png")} />
          </WrapperDivForImages>
          <SpanBanner>Agregar una colmena</SpanBanner>
        </YellowBanner>
        <ColmenaOption text="Añadir colmena con dispositivo"
          imageSource={require("../utils/agregarCuaderno@2x.png")}
          onClick={(e) => {
            e.preventDefault();
            props.history.push("/agregarColmenaDevice");
          }} />
        <ColmenaOption text="Añadir colmena estándar"
          imageSource={require("../utils/agregarColmena@2x.png")}
          onClick={(e) => {
            e.preventDefault();
            props.history.push("/agregarColmenaEstandar");
          }
          }
        />
        < hr style={{ border: "1px solid lightgrey" }
        } />
      </div>
      : <h3 style={{ marginTop: "10vh" }}>ACCESO DENEGADO</h3>}
  </div>
  );
});
