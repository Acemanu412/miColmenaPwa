import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App";
import { ContextProvider } from "./hooks/useStore";
import * as serviceWorker from "./serviceWorker";
import RootStore from "./store";

require("dotenv").config();

const store = RootStore.create({});

console.log(process.env);
ReactDOM.render(
  <ContextProvider value={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextProvider>,
  document.getElementById("root"),
);

serviceWorker.register();
