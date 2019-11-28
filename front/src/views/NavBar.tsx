import React from "react";
import { Menu } from "../components/Menu";
import { LogoNavBar, StyledMenu, NavBarContainer } from "../styles/NavBarStyles";

export const NavBar: React.FC = () => {
  return (
    <NavBarContainer>
      <StyledMenu />
      <LogoNavBar src={require("../utils/miColmenaLogo@2x.png")} />
    </NavBarContainer>
  );
};
