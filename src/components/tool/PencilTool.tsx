import React from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import { StoreModel } from "../../store";

export const PencilTool: React.FC = () => {
  const brushSize = useStoreState<StoreModel>(state => state.tool.brushSize);
  const increaseBrushSize = useStoreActions<StoreModel>(
    actions => actions.tool.increaseBrushSize
  );
  const decreaseBrushSize = useStoreActions<StoreModel>(
    actions => actions.tool.decreaseBrushSize
  );

  const handleIncreaseClick =() => {
    increaseBrushSize(1);
  };
  const handleDecreaseClick = () => () => {
    decreaseBrushSize(1);
  };

  // zoom
  const zoom = useStoreState<StoreModel>(state => state.canvas.zoom);
  const increaseZoom = useStoreActions<StoreModel>(
    actions => actions.canvas.increaseZoom
  );
  const decreaseZoom = useStoreActions<StoreModel>(
    actions => actions.canvas.decreaseZoom
  );

  const handleIncreaseZoomClick =() => {
    increaseZoom(2);
  };
  const handleDecreaseZoomClick = () => {
    decreaseZoom(2);
  };

  return (
    <>
    <div>
      <span>Pencil Tool:&nbsp;</span>
      <button onClick={handleIncreaseClick}>+</button>
      <span>{brushSize}</span>
      <button onClick={handleDecreaseClick}>-</button>
    </div>

    <div>
      <span>Zoom Tool:&nbsp;</span>
      <button onClick={handleIncreaseZoomClick}>+</button>
      <span>{zoom}</span>
      <button onClick={handleDecreaseZoomClick}>-</button>
    </div>
    </>
  );
};
