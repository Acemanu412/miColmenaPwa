import React from "react";
import { Menu } from "../components/Menu";
import { LogoNavBar } from "../styles/NavBarStyles";

export const NavBar: React.FC = () => {
  return (
    <div>
      <Menu />
      <LogoNavBar />
    </div>
  );
};
