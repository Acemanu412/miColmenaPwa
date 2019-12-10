import React, { useEffect } from "react";

import { fetchUser } from "../api/";
import SideNav from "../components/SideNav";
import { useStores } from "../hooks/useStore";
import { LogoNavBar, NavBarContainer } from "../styles/NavBarStyles";

export const NavBar: React.FC = () => {
  const store = useStores();

  useEffect(() => {
    store.setIsFetchingUser(true);
    fetchUser().then((data) => {
      if (data.message) {
        store.updateWarning(data);
      } else {
        store.setUser(data);
      }
      return data;
    });
  });

  return (
    <NavBarContainer id="navBar">
      <SideNav />
      <LogoNavBar src={require("../utils/miColmenaLogo@2x.png")} />
    </NavBarContainer>
  );
};
