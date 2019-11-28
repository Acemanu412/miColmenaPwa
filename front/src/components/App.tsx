import React from "react";
import { Route } from "react-router-dom";
import ActivarCuenta from "../views/ActivarCuenta";
import ForgotPassword from "../views/ForgotPassword";
import Login from "../views/Login";
import Signup from "../views/Signup";

const App: React.FC = () => {
  return (
    <div>
      <Route exact path="/" component={Login} />
      <Route exact path="/forgotP" component={ForgotPassword} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/activarCuenta/:id" component={ActivarCuenta}/>
    </div>
  );
};

export default App;
