import React from "react";
<<<<<<< HEAD
import { Route } from "react-router-dom";
=======
import { Route, Switch, BrowserRouter } from "react-router-dom";
>>>>>>> cd6a8c4028933857e650f8df68743fd5d1dbb6be
import ForgotPassword from "../views/ForgotPassword";
import Login from "../views/Login";
import Signup from "../views/Signup";

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
