import React from "react";
import "./App.css";
import { StoreProvider } from "easy-peasy";
import { store } from "./../store";
import { Layout } from "../layout";
import { Menu } from "../components/menu";
import { Tools } from "../components/tool";
import { ColorPalette } from "../components/color-palette";
import { PixelCanvas } from "../components/pixel-canvas";

export const App: React.FC = () => {
  return (
    <StoreProvider store={store as any}>
      <Layout
        top={<Menu />}
        left={<Tools />}
        middle={domRect => <PixelCanvas parentDomRect={domRect} />}
        right={<ColorPalette />}
      />
    </StoreProvider>
  );
};
