import React from "react";
import { Route } from "react-router-dom";
import ActivarCuenta from "../views/ActivarCuenta";
import ForgotPassword from "../views/ForgotPassword";
import Login from "../views/Login";
import Signup from "../views/Signup";
import { Home } from "../views/Home";
import { Reina } from "../views/Reina";

const App: React.FC = () => {
  return (
    <div>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/forgotP" component={ForgotPassword} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/activarCuenta/:id" component={ActivarCuenta} />
      <Route exact path="/reina" component={Reina} />
    </div>
  );
};

export default App;
