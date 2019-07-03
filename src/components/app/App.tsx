import React from "react";
import "./App.css";
import { PixelCanvas } from "../pixel-canvas";
import { ColorPalette } from "../color-palette/ColorPalette";
import { PencilTool } from "../tool";

import { StoreProvider } from "easy-peasy";
import { store } from "./../../store";

const App: React.FC = () => {
  return (
    <StoreProvider store={store}>
      <div className="App">
        <header className="App-header">
          <ColorPalette />
          <PencilTool />
          <PixelCanvas />
        </header>
      </div>
    </StoreProvider>
  );
};

export default App;
