import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Login from "../views/login";
import Signup from "../views/signup";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        {/*  OJOOO AQUI  */}
        <Route path="/" component={Login} />
        <Route exact path="/" component={Signup} />
      </BrowserRouter>
    </div>
  );
};

export default App;
