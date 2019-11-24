import React from "react";
import { Route } from "react-router-dom";
import Signup from "../views/signup";

const App: React.FC = () => {
  return (
    <div className="App">
      <Route exact path="/" component={Signup} />
    </div>
  );
};

export default App;
