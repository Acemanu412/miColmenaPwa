import React, { useState } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import { fetchColmenas } from "../api/index";
import { useStores } from "../hooks/useStore";
import {
  ButtonColmenasContainer,
  ColmenasContainer,
  DataColmenaContainer,
  StyledBotonAgregarColmenas,
} from "../styles/ColmenasStyles";

let checkedColmenas = false;
const IP = process.env.REACT_APP_IP || "app.micolmena.xyz";
const PORT = process.env.REACT_APP_PORT || "";
const PROTOCOL = process.env.REACT_APP_PROTOCOL || "https";

const Colmenas: React.FC = (props: any) => {
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
        return (<div onClick={ () => { store.setColmena(colmena);
                                       props.history.push(`/vistaColmena/${colmena.id}`); }}
                      key={index}
                      style={{ textDecoration: "none", color: "black" }}>
          <DataColmenaContainer>
            <img src={`${PROTOCOL}://${IP}${PORT}/fotos/${colmena.foto}`}
                 alt=""
                 style={{ height: "70px" }} />
            {colmena.nombre}
          </DataColmenaContainer>
        </div>);
      })}

      <ButtonColmenasContainer>
        <Link to="/agregarColmena">
          <StyledBotonAgregarColmenas text="Agregar Colmena" />
        </Link>
      </ButtonColmenasContainer>
    </ColmenasContainer>
  );
};

export default withRouter(Colmenas);
