import { Color } from "csstype";

export interface CanvasContext {
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  cellSize: number;
}

export const clear = (
  { ctx, width, height }: CanvasContext,
  defaultColor: Color
) => {
  ctx.beginPath();
  ctx.rect(0, 0, width, height);
  ctx.fillStyle = defaultColor;
  ctx.fill();
  ctx.closePath();
};

export const drawGrid = ({ ctx, width, height, cellSize }: CanvasContext) => {
  ctx.lineWidth = 0.5;
  ctx.setTransform(1, 0, 0, 1, 0, 0); //reset transform
  ctx.translate(0.5, 0.5); //make lines sharp
  for (var i = 0; i <= width; i += cellSize) {
    //draw vertical line HEIGHT length, x=i
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, height);
    ctx.stroke();
    ctx.closePath();
    //draw horizontal line WIDTH length, y=i
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(width, i);
    ctx.stroke();
    ctx.closePath();
  }
  ctx.lineWidth = 0;
};

export const setColor = (
  { ctx, width, height, cellSize }: CanvasContext,
  { x, y, color }: { x: number; y: number; color: Color }
) => {
  // bound check
  if (x <= 0 || x >= width || y <= 0 || y >= height) {
    return;
  }

  // convert coordinates into column and row index
  const col = Math.floor(x / cellSize);
  const row = Math.floor(y / cellSize);

  // canvas logic to fill that rect
  ctx.fillStyle = color;
  ctx.clearRect(col * cellSize, row * cellSize, cellSize, cellSize);
  ctx.beginPath();
  ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
  ctx.closePath();
};
