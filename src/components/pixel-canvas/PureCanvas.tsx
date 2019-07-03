import React from "react";
import { ReactEventHandlers } from "react-use-gesture/events";
import "./Canvas.css";

interface Props {
  width: number;
  height: number;
  canvasRefCallback: (instance: HTMLCanvasElement) => void; // TODO nullable
  bindGesture: (...args: any[]) => ReactEventHandlers; // TODO nullable
}

const _PureCanvas: React.FC<Props> = ({
  canvasRefCallback,
  width,
  height,
  bindGesture
}) => {
  return (
    <canvas
      {...bindGesture()}
      ref={canvasRefCallback}
      width={width}
      height={height}
      className={"pixelated"}
      style={{
        width: "600px",
        height: "600px"
      }}
    />
  );
};

export const PureCanvas = React.memo(_PureCanvas);
