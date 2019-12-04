import React from "react";
import { Route } from "react-router-dom";

import { AgregarColmena } from "../views/AgregarColmena";
import { Consejos } from "../views/Consejos";
import ForgotPassword from "../views/ForgotPassword";
import { Home } from "../views/Home";
import Login from "../views/Login";
import { Notas } from "../views/Notas";
import { Reina } from "../views/Reina";
import Signup from "../views/Signup";
import VistaColmena1 from "../views/VistaColmena1";
import VistaColmenaData from "../views/VistaColmenaData";

const App: React.FC = () => {
  return (
    <div>
      <Route exact path="/agregarColmena" component={AgregarColmena} />
      <Route exact path="/colmenaPrueba" component={VistaColmena1} />
      <Route exact path="/colmena" component={VistaColmenaData} />
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
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
