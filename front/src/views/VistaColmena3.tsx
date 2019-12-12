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
  const store = useStores();

  const defaultColmena = {
    estadoGenerals: [
      {
        audio: "",
        date: "",
        salud: "",
      },
    ],
    manualcolmenas: [
      {
        calidadCrias: 0,
        comportamiento: 0,
        numeroComidas: 0,
        numeroCuadrosTotalesCrias: 0,
        numeroCuadrosTotalesMiel: 0,
        poblacion: 0,
        problemasSalud: [],
      },
    ],
    manualconsejos: [
      {
        aliment: [],
        cera: "",
        intervenciones: [],
        jaleaReal: "",
        miel: "",
        panal: "",
        polen: "",
        propoleo: "",
      },
    ],
    manualreinas: [
      {
        alasRota: false,
        celulasReina: 0,
        huevosVistos: false,
        reinaPresente: false,
        removes: false,
        swarm: false,
      },
    ],
    notas: [
      {
        notaTexto: "",
        urlNotaAudio: "",
      },
    ],
  };
  const [currentColmena, setCurrentColmena] = useState(defaultColmena);

  const IP = process.env.REACT_APP_IP || "app.micolmena.xyz";
  const PORT = process.env.REACT_APP_PORT || "";
  const PROTOCOL = process.env.REACT_APP_PROTOCOL || "https";


  console.log(store.currentDay, "holaaa22222");
  if (store.checkCC === false) {
    fetchRegistros(store.colmena.id, store.currentDay).then((colmena) =>
      setCurrentColmena(colmena)
    );
    store.setCheckCC(true)
  }
  console.log(currentColmena, "holaaaaa");
  console.log("ruta audio", `${PROTOCOL}://${IP}${PORT}/${currentColmena.notas[0].urlNotaAudio.slice(8)}`)
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
            <div>
              <h1>Notas</h1>
              <p>Nota de Audio</p>
              <audio controls>
                <source src={`${PROTOCOL}://${IP}${PORT}/${currentColmena.notas[0].urlNotaAudio.slice(8)}`} />
              </audio>
              <p>Nota de Texto</p>
              <span>{currentColmena.notas[0].notaTexto}</span>
            </div>
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
