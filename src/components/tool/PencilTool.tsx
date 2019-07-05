import React from "react";
// import { useStoreActions, useStoreState } from "easy-peasy";
// import { StoreModel } from "../../store";

const Icon: React.FC = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 1792 1792"
    >
      <path
        d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"
        fill="#fff"
      />
    </svg>
  );
};

export const PencilTool: React.FC = () => {
  // const brushSize = useStoreState<StoreModel>(state => state.tool.brushSize);
  // const increaseBrushSize = useStoreActions<StoreModel>(
  //   actions => actions.tool.increaseBrushSize
  // );
  // const decreaseBrushSize = useStoreActions<StoreModel>(
  //   actions => actions.tool.decreaseBrushSize
  // );

  // const handleIncreaseClick = () => {
  //   increaseBrushSize(1);
  // };
  // const handleDecreaseClick = () => () => {
  //   decreaseBrushSize(1);
  // };

  // // zoom
  // const zoom = useStoreState<StoreModel>(state => state.canvas.zoom);
  // const increaseZoom = useStoreActions<StoreModel>(
  //   actions => actions.canvas.increaseZoom
  // );
  // const decreaseZoom = useStoreActions<StoreModel>(
  //   actions => actions.canvas.decreaseZoom
  // );

  // const handleIncreaseZoomClick = () => {
  //   increaseZoom(2);
  // };
  // const handleDecreaseZoomClick = () => {
  //   decreaseZoom(2);
  // };

  return (
    <Icon />
    // <>
    //   <div>
    //     <span>Pencil Tool:&nbsp;</span>
    //     <button onClick={handleIncreaseClick}>+</button>
    //     <span>{brushSize}</span>
    //     <button onClick={handleDecreaseClick}>-</button>
    //   </div>

    //   <div>
    //     <span>Zoom Tool:&nbsp;</span>
    //     <button onClick={handleIncreaseZoomClick}>+</button>
    //     <span>{zoom}</span>
    //     <button onClick={handleDecreaseZoomClick}>-</button>
    //   </div>
    // </>
  );
};
