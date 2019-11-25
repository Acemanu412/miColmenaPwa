import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Signup from "../views/signup";
import Login from "../views/login";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={Login} />
        <Route exact path="/" component={Signup} />
      </BrowserRouter>
    </div>
  );
};

export default App;
