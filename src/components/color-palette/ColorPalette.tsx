import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import { StoreModel } from "../../store";

export const ColorPalette: React.FC = () => {
  const colors = useStoreState<StoreModel, string[]>(
    state => state.palette.colors
  );

  const selectColor = useStoreActions<StoreModel>(
    actions => actions.palette.selectColor
  );

  const handleClick = (index: number) => () => {
    selectColor(index)
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))"
      }}
    >
      {colors.map((color, i) => (
        <button key={i} onClick={handleClick(i)}>
          <div
            style={{
              backgroundColor: color,
              padding: "1em"
            }}
          >
            {color}
          </div>
        </button>
      ))}
    </div>
  );
};
