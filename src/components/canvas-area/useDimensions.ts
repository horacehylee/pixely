import { useState, useCallback, useLayoutEffect } from "react";

type UseDimensionsHook = [any, DOMRect, HTMLElement];

interface UseDimensionsArgs {
  liveMeasure?: boolean;
}

export const useDimensions = ({
  liveMeasure = true
}: UseDimensionsArgs = {}): UseDimensionsHook => {
  const [dimensions, setDimensions] = useState<DOMRect>();
  const [node, setNode] = useState();

  const ref = useCallback(node => {
    if (node) {
      setNode(node);
    }
  }, []);

  useLayoutEffect(() => {
    if (node) {
      const measure = () => {
        window.requestAnimationFrame(() => {
          const domRect = node.getBoundingClientRect() as DOMRect;
          setDimensions(domRect);
        });
      };
      measure();

      if (liveMeasure) {
        window.addEventListener("resize", measure);
        window.addEventListener("scroll", measure);

        return () => {
          window.removeEventListener("resize", measure);
          window.removeEventListener("scroll", measure);
        };
      }
    }
  }, [node, liveMeasure]);

  return [ref, dimensions!, node];
};
