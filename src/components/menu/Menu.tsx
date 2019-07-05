import React from "react";
import "./Menu.css";
import { Logo } from "./Logo";

interface Props {}

export const Menu: React.FC<Props> = () => {
  return (
    <div
      style={{
        height: "100%",
        display: "inline-flex",
        alignItems: "center"
      }}
    >
      <div className={"Menu-items"}>
        <Logo />
      </div>
      <button className={"Menu-items Menu-button"}>File</button>
      <button className={"Menu-items Menu-button"}>Edit</button>
      <button className={"Menu-items Menu-button"}>Help</button>
    </div>
  );
};
