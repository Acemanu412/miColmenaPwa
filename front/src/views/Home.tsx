import React from "react";
import { Colmenas } from "./Colmenas";
import { NavBar } from "./NavBar";
import { useStores } from "../hooks/useStore";

export const Home: React.FC = (props) => {
  const store = useStores();
  console.log(store)
  return (
    <div>
      <NavBar />
      <Colmenas />
    </div>
  );
};
