import React, {useState} from "react";
import { Link } from "react-router-dom";

import { fetchColmenas } from "../api/index";
import {
  ButtonColmenasContainer,
  ColmenasContainer,
  DataColmenaContainer,
 // ImageColmenasContainer,
  StyledBotonAgregarColmenas,
} from "../styles/ColmenasStyles";

let checkedColmenas = false;

export const Colmenas: React.FC = (props) => {
console.log("checkedColmenas", checkedColmenas);

const [colmenas, setColmenas] = useState([]);
//if (!checkedColmenas) {
  fetchColmenas().then((res) => {
    let colmenaArr = [];
    for (let i = 0; i < res.length; i++) {
      colmenaArr.push(res[i]);
    }
    checkedColmenas = true;

    if(!checkedColmenas || colmenaArr.length !== colmenas.length){
      setColmenas(colmenaArr);
    }
  });
//}

return (
    <ColmenasContainer>

  {colmenas.map((colmena) => {
    return (<Link to="/vistaColmena" style={{ textDecoration: "none", color: "black" }}>
      <DataColmenaContainer>
        <img src={`http://${process.env.REACT_APP_IP}:2222/fotos/${colmena.foto}`} alt="" style={{height: "70px"}}/>
       {colmena.nombre}
      </DataColmenaContainer>
      </Link>);
  })}

      <ButtonColmenasContainer>
        <Link
          to="/agregarColmena"
        >
          <StyledBotonAgregarColmenas text="Agregar Colmena" />
        </Link>
      </ButtonColmenasContainer>

    </ColmenasContainer>
  );
};
