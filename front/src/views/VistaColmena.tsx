import React from "react";
import { observer } from "mobx-react";

const VistaColmena = observer(() => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "red",
        backgroundSize: "cover",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flex: 1,
          backgroundColor: "purple",
          borderStyle: "solid",
          borderColor: "green",
        }}
      >
        <div style={{ flex: 1, fontSize: "5rem", borderStyle: "dashed" }}>
          <p>holi</p>
        </div>
        <div
          style={{
            display: "flex",
            flex: 4,
            flexDirection: "column",
            borderStyle: "dashed",
          }}
        >
          {" "}
          <p>holi2</p>
          <p>holi3</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flex: 1,
          backgroundColor: "blue",
          borderStyle: "solid",
          borderColor: "green",
        }}
      >
        <p>hola</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flex: 1,
          backgroundColor: "yellow",
          borderStyle: "solid",
          borderColor: "green",
        }}
      >
        <p>hola</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flex: 1,
          backgroundColor: "orange",
          borderStyle: "solid",
          borderColor: "green",
        }}
      >
        <p>hola</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flex: 1,
          backgroundColor: "pink",
          borderStyle: "solid",
          borderColor: "green",
        }}
      >
        <p>hola</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flex: 1,
          backgroundColor: "dark blue",
          borderStyle: "solid",
          borderColor: "green",
        }}
      >
        <p>hola</p>
      </div>
    </div>
  );
});
export default VistaColmena;
