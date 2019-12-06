import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import { logOut } from "../api/index";
import {
  ImgDiv,
  LinkDiv,
  LinkImg,
  LinkTextSpan,
  SideNavImg,
  SideNavMenu,
} from "../styles/SideNavStyles";

const SideNav: React.FC = (props: any) => {
  let isOpen = false;
  function salirHandleClick() {
    const resData = logOut();
    if (resData instanceof Error) {
      throw new Error("No se pudo cerrar session");
    } else {
      props.history.push("/");
    }
  }

  function toggleNav() {
    if (isOpen) {
      document.getElementById("sideNav").style.width = "0";
      isOpen = false;
    } else {
      document.getElementById("sideNav").style.width = "13.5rem";
      isOpen = true;
    }
  }

  return (
    <div style={{ display: "flex" }}>
      <SideNavMenu id="sideNav">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <LinkDiv>
            {" "}
            <ImgDiv>
              <LinkImg src={require("../utils/celdas@2x.png")} />
            </ImgDiv>
            <LinkTextSpan>Mis Colmenas</LinkTextSpan>
          </LinkDiv>
        </Link>
        <Link to="#" style={{ textDecoration: "none" }}>
          <LinkDiv>
            {" "}
            <ImgDiv>
              <LinkImg src={require("../utils/camera@2x.png")} />
            </ImgDiv>
            <LinkTextSpan>Grabaciones</LinkTextSpan>
          </LinkDiv>
        </Link>
        <Link to="#" style={{ textDecoration: "none" }}>
          {" "}
          <LinkDiv>
            <ImgDiv>
              <LinkImg src={require("../utils/engranaje@2x.png")} />
            </ImgDiv>
            <LinkTextSpan>Ajustes</LinkTextSpan>
          </LinkDiv>
        </Link>
        <Link to="#" style={{ textDecoration: "none" }}>
        <LinkDiv onClick={salirHandleClick}>
          <ImgDiv>
            <LinkImg src={require("../utils/salir@2x.png")} />
          </ImgDiv>
          <LinkTextSpan>Salir</LinkTextSpan>
        </LinkDiv>
        </Link>
      </SideNavMenu>
      <SideNavImg src={require("../utils/hMenu@2x.png")} onClick={toggleNav} />
    </div>
  );
};

export default withRouter(SideNav);
