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
        middle={
          <div
            style={{
              backgroundColor: "#1E1E1E",
              width: "100%",
              height: "100%",
              boxShadow: "inset 0px 0px 5px 0px rgba(0, 0, 0, 0.4)"
            }}
          >
            <PixelCanvas />
          </div>
        }
        right={<ColorPalette />}
      />
    </StoreProvider>
  );
};
