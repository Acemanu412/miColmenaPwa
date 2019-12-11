import { observer } from "mobx-react";
import React from "react";

import { useStores } from "../hooks/useStore";
import { Colmenas } from "./Colmenas";
import { NavBar } from "./NavBar";

export const Home: React.FC = observer((props) => {
  const store = useStores();
  return (
    <div>
      <NavBar />
      {store.user || (!store.user && store.isFetchingUser) ? (
        <Colmenas />
      ) : (
        <h3 style={{ marginTop: "10vh" }}>ACCESO DENEGADO</h3>
      )}
    </div>
  );
});
