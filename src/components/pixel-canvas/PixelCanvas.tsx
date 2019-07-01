import React, { useRef, useEffect } from "react";
import { createPropGetter } from "../../createPropGetter";
import { setColor, CanvasContext, clear, drawGrid } from "./canvas-fns";

type PixelCanvasProps = {
  width: number;
  height: number;
} & Partial<PixelCanvasDefaultProps>;

const defaultProps = {
  rows: 16,
  columns: 16,
  defaultColor: "white",
  dragDelayMs: 50
};
type PixelCanvasDefaultProps = Readonly<typeof defaultProps>;
const getProps = createPropGetter(defaultProps);

let mouseDown = false;
let mouseDownAt = 0;
let dragged = false;

export const PixelCanvas: React.FC<PixelCanvasProps> = props => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { width, height, rows, defaultColor, dragDelayMs } = getProps(props);

  const getCanvasContext = (): CanvasContext => {
    return Object.freeze({
      ctx: canvasRef.current!.getContext("2d")!,
      width,
      height,
      cellSize: width / rows
    });
  };

  useEffect(() => {
    const canvasContext = getCanvasContext();
    canvasContext.ctx.imageSmoothingEnabled = false;

    clear(canvasContext, defaultColor);
    drawGrid(canvasContext);
  });

  const handleMouseDown = () => {
    mouseDown = true;
    mouseDownAt = Date.now();
  };

  const handleMouseUp = (event: React.MouseEvent) => {
    if (dragged) {
      setColor(getCanvasContext(), {
        x: event.nativeEvent.offsetX,
        y: event.nativeEvent.offsetY,
        color: "black"
      });
    }
    mouseDown = false
    mouseDownAt = 0;
    dragged = false
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!mouseDown) {
      return false;
    }
    if (Date.now() - mouseDownAt > dragDelayMs) {
      setColor(getCanvasContext(), {
        x: event.nativeEvent.offsetX,
        y: event.nativeEvent.offsetY,
        color: "black"
      });
    }
  };

  return (
    <canvas
      ref={canvasRef}
      width={width + 1}
      height={height + 1}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    />
  );
};

PixelCanvas.defaultProps = defaultProps;
