import React from "react";
import { NavBar } from "./NavBar";
import { Colmenas } from "./Colmenas";

export const Home: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Colmenas />
    </div>
  );
};
