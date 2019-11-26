import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import { ContextProvider } from "./hooks/useStore";

import RootStore, { IRootStore } from "./store";

import * as serviceWorker from "./serviceWorker";

const store = RootStore.create({});

ReactDOM.render(
  <ContextProvider value={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextProvider>,
  document.getElementById("root")
);

serviceWorker.register();
