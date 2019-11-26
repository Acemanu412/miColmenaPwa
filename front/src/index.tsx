import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import { ContextProvider } from "./hooks/useStore";

import RootStore, { IRootStore } from "./store";

import * as serviceWorker from "./serviceWorker";
<<<<<<< HEAD
import RootStore from "./store";
=======
>>>>>>> cd6a8c4028933857e650f8df68743fd5d1dbb6be

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
