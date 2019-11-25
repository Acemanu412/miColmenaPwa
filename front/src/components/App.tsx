import React from "react";
import { Route, Switch } from "react-router-dom";
import ForgotPassword from "../views/ForgotPassword";

const App: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ForgotPassword} />
      </Switch>
    </div>
  );
};

export default App;
