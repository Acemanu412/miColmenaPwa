import React, { useState } from "react";
import { AgregrarRegistro, DataContainer2 } from "../styles/ColmenaStyles";
import { useStores } from "../hooks/useStore";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { fetchRegistros } from "../api";

const VistaColmena3 = observer(() => {
  const [currentColmena, setCurrentColmena] = useState([]);
  const store = useStores();
  console.log(store.currentDay, "holaaa22222");
  if (store.checkCC === false) {
    fetchRegistros(store.colmena.id, store.currentDay).then((colmena) =>
      setCurrentColmena(colmena)
    );
    store.setCheckCC(true)
  }
  console.log(currentColmena, "holaaaaa");
  return (
    <DataContainer2>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Expansion Panel 1</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>{" "}
      <Link to="/estadoGeneral">
        <AgregrarRegistro style={{ padding: "4%" }} />{" "}
      </Link>
    </DataContainer2>
  );
});

// <DataContainer2>
//   <label style={{ fontWeight: "bold", padding: "4%" }}>
//     Registra tus inspecciones
//   </label>
//   <p style={{ padding: "4%" }}>Puedes llenar un formulario sencillo</p>
//   <Link to="/estadoGeneral">
//     <AgregrarRegistro style={{ padding: "4%" }} />
//   </Link>
//   <label style={{ padding: "4%" }}>Agrega un registro</label>
//   <p style={{ padding: "4%" }}>
//     Puedes ver todos tus registros en la linea de tiempo arriba
//   </p>
// </DataContainer2>

export default VistaColmena3;
