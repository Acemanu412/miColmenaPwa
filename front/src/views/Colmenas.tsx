import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useStores } from "../hooks/useStore";

import { fetchColmenas } from "../api/index";
import {
  ButtonColmenasContainer,
  ColmenasContainer,
  DataColmenaContainer,
  StyledBotonAgregarColmenas,
} from "../styles/ColmenasStyles";

let checkedColmenas = false;
const IP = process.env.REACT_APP_IP || "app.micolmena.xyz";
const PORT = process.env.REACT_APP_PORT || "";
export const Colmenas: React.FC = (props) => {
  const store = useStores();
  const [colmenas, setColmenas] = useState([]);
  fetchColmenas().then((res) => {
    const colmenaArr = [];
    for (let i = 0; i < res.length; i++) {
      colmenaArr.push(res[i]);
    }
    checkedColmenas = true;

    if (!checkedColmenas || colmenaArr.length !== colmenas.length) {
      setColmenas(colmenaArr);
    }
  });

  return (
    <ColmenasContainer>

      {colmenas.map((colmena, index) => {
        return (<Link to="/vistaColmena" key={index} style={{ textDecoration: "none", color: "black" }}>
          <DataColmenaContainer>
            <img src={`http://${IP}${PORT}/fotos/${colmena.foto}`}
              alt="" style={{ height: "70px" }} />
            {colmena.nombre}
          </DataColmenaContainer>
        </Link>);
      })}

      <ButtonColmenasContainer>
        <Link to="/agregarColmena">
          <StyledBotonAgregarColmenas text="Agregar Colmena" />
        </Link>
      </ButtonColmenasContainer>
    </ColmenasContainer>
  );
};
