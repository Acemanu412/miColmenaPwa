import React from "react";
import { Route } from "react-router-dom";

import { AgregarColmena } from "../views/AgregarColmena";
import { AgregarColmenaDevice } from "../views/AgregarColmenaDevice";
import { AgregarColmenaEstandar } from "../views/AgregarColmenaEstandar";
import { Consejos } from "../views/Consejos";
import EstadoGeneral from "../views/EstadoGeneral";
import ForgotPassword from "../views/ForgotPassword";
import { FormColmenas } from "../views/FormColmenas";
import { Home } from "../views/Home";
import Login from "../views/Login";
import { Notas } from "../views/Notas";
import { Reina } from "../views/Reina";
import Signup from "../views/Signup";
import VistaColmenaData from "../views/VistaColmenaData";

const App: React.FC = () => {
      return (
            <div>
                  <Route exact path="/" component={Login} />
                  <Route exact path="/agregarColmena" component={AgregarColmena} />
                  <Route exact path="/agregarColmenaDevice" component={AgregarColmenaDevice} />
                  <Route exact path="/agregarColmenaEstandar" component={AgregarColmenaEstandar} />
                  <Route exact path="/colmenas" component={FormColmenas} />
                  <Route exact path="/consejos" component={Consejos} />
                  <Route exact path="/estadoGeneral" component={EstadoGeneral} />
                  <Route exact path="/forgotP" component={ForgotPassword} />
                  <Route exact path="/home" component={Home} />
                  <Route exact path="/notas" component={Notas} />
                  <Route exact path="/reina" component={Reina} />
                  <Route exact path="/signup" component={Signup} />
                  <Route exact path="/vistaColmena/:id" component={VistaColmenaData} />
            </div>
      );
};

export default App;
