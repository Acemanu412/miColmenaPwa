import React from "react";
import { Route } from "react-router-dom";

import ActivarCuenta from "../views/ActivarCuenta";
import { Consejos } from "../views/Consejos";
import ForgotPassword from "../views/ForgotPassword";
import { Home } from "../views/Home";
import Login from "../views/Login";
import { Reina } from "../views/Reina";
import Signup from "../views/Signup";

const App: React.FC = () => {
  return (
    <div>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/forgotP" component={ForgotPassword} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/activarCuenta/:id" component={ActivarCuenta} />
      <Route exact path="/reina" component={Reina} />
      <Route exact path="/consejos" component={Consejos} />
    </div>
  );
};

export default App;
