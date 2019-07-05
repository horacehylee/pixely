import React from "react";
import "./Tools.css";
import { FillTool } from "./FillTool";
import { PencilTool } from "./PencilTool";
import { EyeDropperTool } from "./EyeDropperTool";
import { EraserTool } from "./EraserTool";

export const Tools: React.FC = () => {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <button className={"Tools-items Tools-button"}>
        <PencilTool />
      </button>
      <button className={"Tools-items Tools-button"}>
        <EraserTool />
      </button>
      <button className={"Tools-items Tools-button"}>
        <EyeDropperTool />
      </button>
      <button className={"Tools-items Tools-button"}>
        <FillTool />
      </button>
    </div>
  );
};
