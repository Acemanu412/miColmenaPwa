import React from "react";
import { Link } from "react-router-dom";
import { ImgDiv, LinkDiv, LinkImg, LinkTextSpan, SideNavImg, SideNavMenu } from "../styles/SideNavStyles";

export const SideNav: React.FC = () => {
  let isOpen = false;

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
    <div style={{display: "flex"}}>
      <SideNavMenu id="sideNav">
      <Link to="#" style={{ textDecoration: "none" }}><LinkDiv> <ImgDiv>
          <LinkImg src={require("../utils/celdas@2x.png")} /></ImgDiv>
          <LinkTextSpan>Mis Colmenas</LinkTextSpan></LinkDiv></Link>
      <Link to="#" style={{ textDecoration: "none" }}><LinkDiv> <ImgDiv>
          <LinkImg src={require("../utils/camera@2x.png")} /></ImgDiv>
          <LinkTextSpan>Grabaciones</LinkTextSpan></LinkDiv></Link>
      <Link to="#" style={{ textDecoration: "none" }}> <LinkDiv><ImgDiv>
          <LinkImg src={require("../utils/engranaje@2x.png")} /></ImgDiv>
          <LinkTextSpan>Ajustes</LinkTextSpan></LinkDiv></Link>
      <Link to="#" style={{ textDecoration: "none" }}>  <LinkDiv><ImgDiv>
          <LinkImg src={require("../utils/salir@2x.png")} /></ImgDiv>
          <LinkTextSpan>Salir</LinkTextSpan></LinkDiv></Link>
      </SideNavMenu>
      <SideNavImg src={require("../utils/hMenu@2x.png")} onClick={toggleNav} />
    </div>
  );
};
