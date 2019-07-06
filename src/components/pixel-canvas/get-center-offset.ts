export const getCenterOffset = ({
  parentDomRect,
  width,
  height
}: {
  parentDomRect: DOMRect;
  width: number;
  height: number;
}): { left: number; top: number } => {
  return {
    left: Math.floor((parentDomRect.width - width) / 2),
    top: Math.floor((parentDomRect.height - height) / 2)
  };
};
