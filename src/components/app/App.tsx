import React from "react";
import "./App.css";
import { PixelCanvas } from "../pixel-canvas";
import { ColorPalette } from "../color-palette/ColorPalette";
import { PencilTool } from "../tool";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <ColorPalette />
        <PencilTool/>
        <PixelCanvas />
      </header>
    </div>
  );
};

export default App;
