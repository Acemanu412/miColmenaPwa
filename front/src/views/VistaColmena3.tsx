import React from "react";
import { observer } from "mobx-react";
import { DataContainer2, AgregrarRegistro } from "../styles/ColmenaStyles";

import { Link } from "react-router-dom";

const VistaColmena3 = observer(() => {
  return (
    <DataContainer2>
      <label style={{ fontWeight: "bold", padding: "4%" }}>
        Registra tus inspecciones
      </label>
      <p style={{ padding: "4%" }}>Puedes llenar un formulario sencillo</p>

      <Link to="/vistaColmena">
        <AgregrarRegistro style={{ padding: "4%" }} />
      </Link>

      <label style={{ padding: "4%" }}>Agrega un registro</label>
      <p style={{ padding: "4%" }}>
        Puedes ver todos tus registros en la linea de tiempo arriba
      </p>
    </DataContainer2>
  );
});
export default VistaColmena3;
