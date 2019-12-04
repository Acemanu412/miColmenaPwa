import React from "react";
import { Route } from "react-router-dom";

import { Consejos } from "../views/Consejos";
import ForgotPassword from "../views/ForgotPassword";
import { Home } from "../views/Home";
import Login from "../views/Login";
import { Notas } from "../views/Notas";
import { Reina } from "../views/Reina";
import Signup from "../views/Signup";
import VistaColmenaData from "../views/VistaColmenaData";
import EstadoGeneral from "../views/EstadoGeneral";

const App: React.FC = () => {
  return (
    <div>
      <Route exact path="/estadoGeneral" component={EstadoGeneral} />
      <Route exact path="/vistaColmena" component={VistaColmenaData} />
      <Route exact path="/" component={Login} />
      <Route exact path="/forgotP" component={ForgotPassword} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/colmena" component={Home} />
      <Route exact path="/reina" component={Reina} />
      <Route exact path="/consejos" component={Consejos} />
      <Route exact path="/notas" component={Notas} />
    </div>
  );
};

export default App;
