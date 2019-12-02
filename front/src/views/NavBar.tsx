import React from "react";
import { SideNav } from "../components/SideNav";
import { LogoNavBar, NavBarContainer} from "../styles/NavBarStyles";

export const NavBar: React.FC = () => {
  return (
    <NavBarContainer id="navBar">
      <SideNav />
      <LogoNavBar src={require("../utils/miColmenaLogo@2x.png")} />
    </NavBarContainer>
  );
};
