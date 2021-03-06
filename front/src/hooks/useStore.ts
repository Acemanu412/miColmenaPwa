import React from "react";

import { IRootStore } from "../store";

export const StoreContext = React.createContext<IRootStore>({} as IRootStore);

export const useStores = () => {
  return React.useContext(StoreContext);
};

export const ContextProvider = StoreContext.Provider;
