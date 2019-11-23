import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Login from "../views/login";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={Login} />
      </BrowserRouter>
    </div>
  );
};

export default App;
