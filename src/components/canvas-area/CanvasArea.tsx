import React, { useEffect, useState, useRef } from "react";
import { useDimensions } from "./useDimensions";
import { PixelCanvas } from "../pixel-canvas";
import { useSpring } from "react-spring";
import { useStoreActions, useStoreState } from "../../hooks";

export const CanvasArea: React.FC = () => {
  const [ref, domRect] = useDimensions();
  const increaseZoom = useStoreActions(
    (actions) => actions.canvas.increaseZoom
  );
  const decreaseZoom = useStoreActions(
    (actions) => actions.canvas.decreaseZoom
  );

  const zoom = useStoreState((state) => state.canvas.zoom);
  const width = useStoreState((state) => state.canvas.width);
  const height = useStoreState((state) => state.canvas.height);

  const [wheelXy, setWheelXy] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const animatedStyleProps = useAnimatedCanvasProps({
    width,
    height,
    zoom,
    parentDomRect: domRect,
    wheelXy,
  });

  const handleWheel = (event: React.WheelEvent) => {
    const deltaY = event.deltaY;
    if (deltaY < 0) {
      increaseZoom(-deltaY / 30);
    } else {
      decreaseZoom(deltaY / 30);
    }
    setWheelXy({ x: event.clientX, y: event.clientY });
  };

  return (
    <div
      ref={ref}
      onWheel={handleWheel}
      style={{ width: "100%", height: "100%" }}
    >
      <PixelCanvas animatedStyleProps={animatedStyleProps} />
    </div>
  );
};

const toEven = (val: number) => {
  if (val % 2 === 0) {
    return val;
  } else {
    return val + 1;
  }
};

const useAnimatedCanvasProps = ({
  width,
  height,
  zoom,
  parentDomRect,
  wheelXy,
}: {
  width: number;
  height: number;
  zoom: number;
  parentDomRect: DOMRect;
  wheelXy: { x: number; y: number };
}): React.CSSProperties => {
  const [animatedProps, setAnimatedProps] = useSpring(() => {
    return {
      width: zoom * width,
      height: zoom * height,
    };
  });
  useEffect(() => {
    const w = zoom * width;
    const h = zoom * height;
    setAnimatedProps({
      width: w,
      height: h,
    });
  }, [width, height, zoom, setAnimatedProps]);

  const previousZoom = usePrevious(zoom);

  // TODO: enable pan and zoom control offset
  const [animatedOffsetProps, setAnimatedOffsetProps] = useSpring(() => {
    return {
      left: 0,
      top: 0,
    };
  });
  const [canvasOffset, setCanvasOffset] = useState<{
    left: number;
    top: number;
  }>({
    left: 0,
    top: 0,
  });
  useEffect(() => {
    setAnimatedOffsetProps(canvasOffset);
  }, [canvasOffset, setAnimatedOffsetProps]);

  // offset to center once
  const [initialized, setInitialized] = useState(false);
  useEffect(() => {
    if (initialized) {
      return;
    }
    if (parentDomRect) {
      setInitialized(true);
      setCanvasOffset({
        left: toEven(Math.floor((parentDomRect.width - width * zoom) / 2)),
        top: toEven(Math.floor((parentDomRect.height - height * zoom) / 2)),
      });
    }
  }, [width, height, zoom, initialized, parentDomRect]);

  useEffect(() => {
    if (!initialized) {
      return;
    }
    if (canvasOffset.left === 0) {
      return;
    }
    const wheelRelative = parentDomRect
      ? {
          x: wheelXy.x - parentDomRect.x,
          y: wheelXy.y - parentDomRect.y,
        }
      : { x: 0, y: 0 };

    const threshold = 2;
    const leftDelta =
      ((wheelRelative.x - canvasOffset.left) / previousZoom) *
      (zoom - previousZoom);
    const rightDelta =
      ((wheelRelative.y - canvasOffset.top) / previousZoom) *
      (zoom - previousZoom);
    if (Math.abs(leftDelta) > threshold || Math.abs(rightDelta) > threshold) {
      setCanvasOffset({
        left: toEven(Math.floor(canvasOffset.left - leftDelta)),
        top: toEven(Math.floor(canvasOffset.top - rightDelta)),
      });
    }
  }, [
    width,
    height,
    previousZoom,
    canvasOffset,
    zoom,
    initialized,
    parentDomRect,
    wheelXy.x,
    wheelXy.y,
  ]);

  return { ...animatedProps, ...animatedOffsetProps };
};

const usePrevious = function <TValue>(value: TValue) {
  const ref = useRef<TValue>(value);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};
