import React from "react";
import { Route } from "react-router-dom";

import ForgotPassword from "../views/ForgotPassword";
import Login from "../views/Login";
import SendCode from "../views/SendCode";
import Signup from "../views/Signup";
import { Home } from "../views/Home";

const App: React.FC = () => {
  return (
    <div>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/forgotP" component={ForgotPassword} />
      <Route exact path="/code" component={SendCode} />
      <Route exact path="/signup" component={Signup} />
    </div>
  );
};

export default App;
