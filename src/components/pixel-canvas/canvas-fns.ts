import { Color } from "csstype";

export interface CanvasContext {
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  brushSize: number;
}

export const clear = ({ ctx, width, height }: CanvasContext) => {
  ctx.clearRect(0, 0, width, height);
};

export const checkerBoardPattern = (
  canvasContext: CanvasContext,
  {
    squareSize,
    firstColor,
    secondColor
  }: { squareSize: number; firstColor: string; secondColor: string }
) => {
  const { width, height } = canvasContext;
  const columns = Math.ceil(width / squareSize);
  let color = firstColor;

  for (let i = 0; i < height; i += squareSize) {
    for (let j = 0; j < width; j += squareSize) {
      setColor(
        {
          ...canvasContext,
          brushSize: squareSize
        },
        {
          x: j,
          y: i,
          color
        }
      );
      color = color === firstColor ? secondColor : firstColor;
    }

    // flip again if even columns
    if (columns % 2 === 0) {
      color = color === firstColor ? secondColor : firstColor;
    }
  }
};

export const withinBound = (
  { width, height }: CanvasContext,
  { x, y }: { x: number; y: number }
) => {
  if (x < 0 || x >= width || y < 0 || y >= height) {
    return false;
  }
  return true;
};

export const line = (
  canvasContext: CanvasContext,
  {
    x0,
    y0,
    x1,
    y1,
    color
  }: {
    x0: number;
    y0: number;
    x1: number;
    y1: number;
    color: string;
  }
) => {
  const { width, height } = canvasContext;
  const xClamp = clamp({
    min: 0,
    max: width - 1
  });
  const yClamp = clamp({
    min: 0,
    max: height - 1
  });

  x0 = xClamp(x0);
  y0 = yClamp(y0);
  x1 = xClamp(x1);
  y1 = yClamp(y1);

  const dx = Math.abs(x1 - x0);
  const dy = Math.abs(y1 - y0);
  const sx = x0 < x1 ? 1 : -1;
  const sy = y0 < y1 ? 1 : -1;
  let err = dx - dy;

  while (true) {
    setColor(canvasContext, { x: x0, y: y0, color });

    //if we've reached the end goal, exit the loop
    if (x0 === x1 && y0 === y1) {
      break;
    }
    const e2 = 2 * err;
    if (e2 > -dy) {
      err -= dy;
      x0 += sx;
    }
    if (e2 < dx) {
      err += dx;
      y0 += sy;
    }
  }
};

export const setColor = (
  canvasContext: CanvasContext,
  { x, y, color }: { x: number; y: number; color: Color }
) => {
  const { ctx, brushSize } = canvasContext;
  ctx.fillStyle = color;
  ctx.fillRect(x, y, brushSize, brushSize);
};

const clamp = ({ min, max }: { min: number; max: number }) => (
  value: number
) => {
  return Math.min(Math.max(value, min), max);
};
