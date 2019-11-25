import React from "react";
import { Route, Switch } from "react-router-dom";
import ForgotPassword from "../views/ForgotPassword";
import Login from "../views/login";
import Signup from "../views/signup";

const App: React.FC = () => {
  return (
    <div>
      <Route exact path="/" component={Login} />

      <Route exact path="/forgotP" component={ForgotPassword} />
      <Route exact path="/signup" component={Signup} />
    </div>
  );
};

export default App;
