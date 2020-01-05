import React from "react";
import { StoreProvider } from "easy-peasy";
import { store } from "./../store";
import { Layout } from "../layout";
import { Menu } from "../components/menu";
import { Tools } from "../components/tool";
import { ColorPalette } from "../components/color-palette";
import { CanvasArea } from "../components/canvas-area";

export const App: React.FC = () => {
  return (
    <StoreProvider store={store as any}>
      <Layout
        top={<Menu />}
        left={<Tools />}
        // middle={<div></div>}
        middle={<CanvasArea />}
        right={<ColorPalette />}
      />
    </StoreProvider>
  );
};
