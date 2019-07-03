import React, { useRef, useEffect, useCallback } from "react";
import { createPropGetter } from "../../createPropGetter";
import { CanvasContext, clear, line, withinBound } from "./canvas-fns";
import { useStoreState } from "easy-peasy";
import { StoreModel } from "../../store";
import { PureCanvas } from "./PureCanvas";
import { useGesture } from "react-use-gesture";

type PixelCanvasProps = {
  width: number;
  height: number;
} & Partial<PixelCanvasDefaultProps>;

const defaultProps = {
  zoom: 1,
  brushSize: 1
};
type PixelCanvasDefaultProps = Readonly<typeof defaultProps>;
const getProps = createPropGetter(defaultProps);

export const PixelCanvas: React.FC<PixelCanvasProps> = props => {
  const { width, height, zoom, brushSize } = getProps(props);

  const selectedColor = useStoreState<StoreModel, string>(
    state => state.palette.selected
  );

  const getCanvasContext = useCallback((): CanvasContext => {
    return Object.freeze({
      ctx: canvasRef.current!.getContext("2d")!,
      width,
      height,
      brushSize
    } as CanvasContext);
  }, [height, width, brushSize]);

  useEffect(() => {
    const canvasContext = getCanvasContext();
    canvasContext.ctx.imageSmoothingEnabled = true;

    clear(canvasContext);
  }, [getCanvasContext]);

  const canvasRef = useRef<HTMLCanvasElement>();
  const canvasRefCallback = useCallback(node => {
    if (node !== null) {
      canvasRef.current = node;
    }
  }, []);

  const bindGesture = useGesture({
    onDrag: state => {
      const [x0, y0] = state.previous;
      const [x1, y1] = state.xy;
      const canvas = canvasRef.current!;

      const rectX0 = Math.floor(
        (x0 - canvas.offsetLeft - canvas.scrollLeft) / zoom
      );
      const rectY0 = Math.floor(
        (y0 - canvas.offsetTop - canvas.scrollTop) / zoom
      );
      const rectX1 = Math.floor(
        (x1 - canvas.offsetLeft - canvas.scrollLeft) / zoom
      );
      const rectY1 = Math.floor(
        (y1 - canvas.offsetTop - canvas.scrollTop) / zoom
      );

      // ignore if previous pos out of bound
      if (!withinBound(getCanvasContext(), { x: rectX0, y: rectY0 })) {
        return;
      }

      line(getCanvasContext(), {
        x0: rectX0,
        y0: rectY0,
        x1: rectX1,
        y1: rectY1,
        color: selectedColor
      });
    }
  });

  return (
    <PureCanvas
      canvasRefCallback={canvasRefCallback}
      width={width}
      height={height}
      bindGesture={bindGesture}
    />
    // Background Canvas
  );
};

PixelCanvas.defaultProps = defaultProps;
