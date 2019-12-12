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

const IP = process.env.REACT_APP_IP || "app.micolmena.xyz";
const PORT = process.env.REACT_APP_PORT || "";
const PROTOCOL = process.env.REACT_APP_PROTOCOL || "https";

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
        alimento: [],
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
        alasRotas: false,
        celulasReina: 0,
        huevosVistos: false,
        reinaPresente: false,
        removed: false,
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
    store.setCheckCC(true);
  }
  return (
    <DataContainer2>
      <ExpansionPanel style={{ width: "95vw", marginTop: "20px" }}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{currentColmena.estadoGenerals[0].date}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails
          style={{ display: "flex", flexDirection: "column" }}
        >
          {" "}
          <ul>
            <li>
              <label>Estado General</label>
            </li>

            <p>{currentColmena.estadoGenerals[0].salud}</p>
            <audio controls>
              <source src={`${currentColmena.estadoGenerals[0].audio}`} />
            </audio>

            <li>
              <label>Manual Colmenas</label>
            </li>

            <p>
              Calidad de crias:{currentColmena.manualcolmenas[0].calidadCrias}
            </p>
            <p>
              Comportamiento: {currentColmena.manualcolmenas[0].comportamiento}
            </p>
            <p>
              Numero de comidas:{currentColmena.manualcolmenas[0].numeroComidas}
            </p>
            <p>
              Numero cuadros/crias:{" "}
              {currentColmena.manualcolmenas[0].numeroCuadrosTotalesCrias}
            </p>
            <p>
              Numero cuadros/miel:
              {currentColmena.manualcolmenas[0].numeroCuadrosTotalesMiel}
            </p>
            <p>Poblacion:{currentColmena.manualcolmenas[0].poblacion}</p>
            <p>
              Problemas:{" "}
              {currentColmena.manualcolmenas[0].problemasSalud.map(
                (problemas) => (
                  <p>-{problemas}.</p>
                )
              )}
            </p>

            <li>
              <label>Consejos</label>
            </li>
            <p>
              {" "}
              Alimentos:
              <ul>
                {currentColmena.manualconsejos[0].alimento.map((alimento) => {
                  return <li>{alimento}</li>;
                })}
              </ul>
            </p>
            <p>
              {" "}
              Intervenciones:
              <ul>
                {currentColmena.manualconsejos[0].intervenciones.map(
                  (intervencion) => {
                    return <li>{intervencion}</li>;
                  }
                )}
              </ul>
            </p>
            <p>Cera: {currentColmena.manualconsejos[0].cera}</p>
            <p>Jalea Real: {currentColmena.manualconsejos[0].jaleaReal}</p>
            <p>Miel: {currentColmena.manualconsejos[0].miel}</p>
            <p>Panal: {currentColmena.manualconsejos[0].panal}</p>
            <p>Polen: {currentColmena.manualconsejos[0].polen}</p>
            <p>Propoleo: {currentColmena.manualconsejos[0].propoleo}</p>

            <li>
              <label>Reina</label>
            </li>
            <p>Alas Rota: {currentColmena.manualreinas[0].alasRotas}</p>
            <p>
              Celulas Reina:{" "}
              {currentColmena.manualreinas[0].celulasReina.toString()}
            </p>
            <p>
              Huevos Vistos:{" "}
              {currentColmena.manualreinas[0].huevosVistos.toString()}
            </p>
            <p>
              Reina Presente:{" "}
              {currentColmena.manualreinas[0].reinaPresente.toString()}
            </p>
            <p>Removed: {currentColmena.manualreinas[0].removed.toString()}</p>
            <p>Swarm: {currentColmena.manualreinas[0].swarm.toString()}</p>
            <li>
              <label>Notas</label>
            </li>
            <p>Nota de Audio</p>
            <audio controls>
              <source
                src={`${PROTOCOL}://${IP}${PORT}/${currentColmena.notas[0].urlNotaAudio.slice(
                  8
                )}`}
              />
            </audio>
            <p>Nota de Texto</p>
            <span>{currentColmena.notas[0].notaTexto}</span>
          </ul>
        </ExpansionPanelDetails>
      </ExpansionPanel>{" "}
      <label style={{ fontWeight: "bold", padding: "4%" }}>
        Registra tus inspecciones{" "}
      </label>
      <p style={{ padding: "4%" }}>Puedes llenar un formulario sencillo</p>{" "}
      <Link to="/estadoGeneral">
        <AgregrarRegistro style={{ padding: "4%" }} />{" "}
      </Link>
      <label style={{ padding: "4%" }}>Agrega un registro</label>{" "}
      <p style={{ padding: "4%" }}>
        Puedes ver todos tus registros en la linea de tiempo arriba{" "}
      </p>
    </DataContainer2>
  );
});

// <DataContainer2>
//
// </DataContainer2>

export default VistaColmena3;
