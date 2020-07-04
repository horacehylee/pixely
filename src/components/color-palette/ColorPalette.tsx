import React from "react";
import "./ColorPalette.css";
import { useStoreActions, useStoreState } from "../../hooks";

const AddIcon: React.FC = () => {
  return (
    <svg width="30" height="30" viewBox="0 0 1792 1792">
      <path
        d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"
        fill="#fff"
      />
    </svg>
  );
};

export const ColorPalette: React.FC = () => {
  const colors = useStoreState((state) => state.palette.colors) as string[];

  const selectColor = useStoreActions((actions) => actions.palette.selectColor);

  const handleClick = (index: number) => () => {
    selectColor(index);
  };

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {colors.map((color, i) => (
        <button
          key={i}
          onClick={handleClick(i)}
          className={"ColorPalette-items ColorPalette-button"}
          style={{
            backgroundColor: color,
            flex: 1,
          }}
        />
      ))}

      <button
        className={"ColorPalette-items ColorPalette-button"}
        style={{ minHeight: 48, maxHeight: 48, flex: 0 }}
      >
        <AddIcon />
      </button>
    </div>
  );
};
