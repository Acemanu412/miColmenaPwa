import React from "react";
import { LogoNavBar,
         NavBarContainer,
         StyledMenu } from "../styles/NavBarStyles";

export const NavBar: React.FC = () => {
  return (
    <NavBarContainer>
      <StyledMenu />
      <LogoNavBar src={require("../utils/miColmenaLogo@2x.png")} />
    </NavBarContainer>
  );
};
