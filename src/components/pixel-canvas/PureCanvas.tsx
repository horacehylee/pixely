import React from "react";
import { ReactEventHandlers } from "react-use-gesture/events";
import "./Canvas.css";
import { animated } from "react-spring";

interface Props {
  width: number;
  height: number;
  animatedStyleProps: React.CSSProperties;
  canvasRefCallback?: (instance: HTMLCanvasElement) => void;
  bindGesture?: (...args: any[]) => ReactEventHandlers;
  style?: React.CSSProperties;
  className?: string;
}

const _PureCanvas: React.FC<Props> = ({
  width,
  height,
  animatedStyleProps,
  canvasRefCallback,
  bindGesture,
  style,
  className
}) => {
  const gestureHandlers = bindGesture ? bindGesture() : {};
  return (
    <animated.canvas
      {...gestureHandlers}
      ref={canvasRefCallback}
      width={width}
      height={height}
      className={"Canvas-pixelated " + className}
      style={{ ...style, ...animatedStyleProps }}
    />
  );
};

export const PureCanvas = React.memo(_PureCanvas);
