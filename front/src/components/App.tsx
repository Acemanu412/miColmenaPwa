import React from "react";
import { Route, Switch } from "react-router-dom";
import ForgotPassword from "../views/ForgotPassword";
import Login from "../views/login";
import Signup from "../views/signup";

const App: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={Login} />
        <Route path="/forgotP" component={ForgotPassword} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
};

export default App;
