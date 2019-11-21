import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { superCool } from "./api";
import { superCool2 } from "./hooks";
import { superCool3 } from "./store";
import { superCool5 } from "./utils";
import { superCool6 } from "./views";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.register();

console.log(
  superCool,
  superCool2,
  superCool3,
  superCool5,
  superCool6
);
