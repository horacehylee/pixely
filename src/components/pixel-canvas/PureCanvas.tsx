import React from "react";
import { ReactEventHandlers } from "react-use-gesture/events";
import "./Canvas.css";
import {animated} from 'react-spring'

interface Props {
  width: number;
  height: number;
  animatedProps: React.CSSProperties;
  canvasRefCallback: (instance: HTMLCanvasElement) => void; // TODO nullable
  bindGesture: (...args: any[]) => ReactEventHandlers; // TODO nullable
}

const _PureCanvas: React.FC<Props> = ({
  width,
  height,
  animatedProps,
  canvasRefCallback,
  bindGesture
}) => {
  return (
    <animated.canvas
      {...bindGesture()}
      ref={canvasRefCallback}
      width={width}
      height={height}
      className={"Canvas-pixelated"}
      style={animatedProps}
    />
  );
};

export const PureCanvas = React.memo(_PureCanvas);
