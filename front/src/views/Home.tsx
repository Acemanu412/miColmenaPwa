import React from "react";
import { Colmenas } from "./Colmenas";
import { NavBar } from "./NavBar";

export const Home: React.FC = (props) => {
  return (
    <div>
      <NavBar/>
      <Colmenas />
    </div>
  );
};
