import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./hooks/useStore";

import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import RootStore, { IRootStore } from "./store";

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
