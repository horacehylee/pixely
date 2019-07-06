import React from "react";
import { useDimensions } from "./useDimensions";
import { PixelCanvas } from "../pixel-canvas";
import { useStoreActions } from "easy-peasy";
import { StoreModel } from "../../store";

export const CanvasArea: React.FC = () => {
  const [ref, domRect] = useDimensions();
  const increaseZoom = useStoreActions<StoreModel>(
    actions => actions.canvas.increaseZoom
  );
  const decreaseZoom = useStoreActions<StoreModel>(
    actions => actions.canvas.decreaseZoom
  );

  const handleWheel = (event: React.WheelEvent) => {
    const deltaY = event.deltaY;
    if (deltaY < 0) {
      increaseZoom(-deltaY / 30);
    } else {
      decreaseZoom(deltaY / 30);
    }
  };

  return (
    <div
      ref={ref}
      onWheel={handleWheel}
      style={{ width: "100%", height: "100%" }}
    >
      <PixelCanvas parentDomRect={domRect} />
    </div>
  );
};
