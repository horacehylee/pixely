import React, { useRef, useEffect, useCallback } from "react";
import {
  CanvasContext,
  clear,
  line,
  withinBound,
  checkerBoardPattern,
} from "./canvas-fns";
import { PureCanvas } from "./PureCanvas";
import { useGesture } from "react-use-gesture";
import { createPropGetter } from "../../createPropGetter";
import { useStoreState } from "../../hooks";

type Props = {} & Partial<DefaultProps>;

const defaultProps = {
  transparentGridSize: 2,
  transparentFirstColor: "#B4AEB7",
  transparentSecondColor: "#CCC8CE",
  animatedStyleProps: {} as React.CSSProperties,
};
type DefaultProps = Readonly<typeof defaultProps>;
const getProps = createPropGetter(defaultProps);

export const PixelCanvas: React.FC<Props> = (props) => {
  const {
    transparentGridSize,
    transparentFirstColor,
    transparentSecondColor,
    animatedStyleProps,
  } = getProps(props);

  const selectedColor = useStoreState((state) => state.palette.selectedColor);
  const brushSize = useStoreState((state) => state.tool.brushSize);
  const zoom = useStoreState((state) => state.canvas.zoom);
  const width = useStoreState((state) => state.canvas.width);
  const height = useStoreState((state) => state.canvas.height);

  const getCanvasContext = (
    ref?: React.MutableRefObject<HTMLCanvasElement | undefined>
  ): CanvasContext => {
    return Object.freeze({
      ctx: (ref ? ref : canvasRef).current!.getContext("2d")!,
      width,
      height,
      brushSize,
    } as CanvasContext);
  };

  // canvas setup
  useEffect(() => {
    const canvasContext = getCanvasContext();
    canvasContext.ctx.imageSmoothingEnabled = true;
    clear(canvasContext);

    const backgroundCanvasContext = getCanvasContext(backgroundCanvasRef);
    backgroundCanvasContext.ctx.imageSmoothingEnabled = true;
    checkerBoardPattern(backgroundCanvasContext, {
      squareSize: transparentGridSize,
      firstColor: transparentFirstColor,
      secondColor: transparentSecondColor,
    });

    // eslint-disable-next-line
  }, []);

  // canvas ref callback
  const [canvasRef, canvasRefCallback] = useCanvasRef();
  const [backgroundCanvasRef, backgroundCanvasRefCallback] = useCanvasRef();

  // gesture for canvas
  const bindGesture = useGesture({
    onDrag: (state) => {
      const [x0, y0] = state.previous;
      const [x1, y1] = state.xy;
      const canvas = canvasRef.current!;
      const canvasRect = canvas.getBoundingClientRect();

      const rectX0 = Math.floor((x0 - canvasRect.left) / zoom);
      const rectY0 = Math.floor((y0 - canvasRect.top) / zoom);
      const rectX1 = Math.floor((x1 - canvasRect.left) / zoom);
      const rectY1 = Math.floor((y1 - canvasRect.top) / zoom);

      // ignore if previous pos out of bound
      if (!withinBound(getCanvasContext(), { x: rectX0, y: rectY0 })) {
        return;
      }

      line(getCanvasContext(), {
        x0: rectX0,
        y0: rectY0,
        x1: rectX1,
        y1: rectY1,
        color: selectedColor,
      });
    },
  });

  return (
    <>
      <PureCanvas
        canvasRefCallback={backgroundCanvasRefCallback}
        width={width}
        height={height}
        animatedStyleProps={animatedStyleProps}
        className={"Canvas-background"}
      />
      <PureCanvas
        canvasRefCallback={canvasRefCallback}
        width={width}
        height={height}
        bindGesture={bindGesture}
        animatedStyleProps={animatedStyleProps}
        className={"Canvas-main"}
      />
    </>
  );
};

PixelCanvas.defaultProps = defaultProps;

const useCanvasRef = (): [
  React.MutableRefObject<HTMLCanvasElement>,
  (node: any) => void
] => {
  const ref = useRef<HTMLCanvasElement>();
  const callback = useCallback((node) => {
    if (node) {
      ref.current = node;
    }
  }, []);
  return [ref as React.MutableRefObject<HTMLCanvasElement>, callback];
};
