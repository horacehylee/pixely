import { Color } from "csstype";

export interface CanvasContext {
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  brushSize: number;
}

export const clear = ({ ctx, width, height }: CanvasContext) => {
  // ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "white"; // TODO use clearRect
  ctx.fillRect(0, 0, width, height);
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

export const setColor = (
  canvasContext: CanvasContext,
  { x, y, color }: { x: number; y: number; color: Color }
) => {
  const { ctx, brushSize } = canvasContext;
  if (!withinBound(canvasContext, { x, y })) {
    return;
  }

  // canvas logic to fill that rect
  ctx.fillStyle = color;
  ctx.fillRect(
    x - Math.floor(brushSize / 2),
    y - Math.floor(brushSize / 2),
    brushSize,
    brushSize
  );
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
  const { ctx, width, height, brushSize } = canvasContext;
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
    //set pixel
    ctx.fillStyle = color;
    ctx.fillRect(
      x0 - Math.floor(brushSize / 2),
      y0 - Math.floor(brushSize / 2),
      brushSize,
      brushSize
    );

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

const clamp = ({ min, max }: { min: number; max: number }) => (
  value: number
) => {
  return Math.min(Math.max(value, min), max);
};
