import React, { useEffect, useState } from "react";

type DropDownProperties = {
  items: string[];
  showDropDown: boolean;
  toggleDropDown: Function;
  itemSelection: Function;
};

const DropDownMenu: React.FC<DropDownProperties> = ({
  items,
  itemSelection,
}: DropDownProperties): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState(false);

  const onClickHandler = (item: string): void => {
    itemSelection(item);
  };

  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  return (
    <>
      <div className={showDropDown ? 'dropdown' : 'dropdown active'}>
        {items.map(
          (item: string, index: number): JSX.Element => {
            return (
              <p
                key={index}
                onClick={(): void => {
                  onClickHandler(item);
                }}
              >
                {item}
              </p>
            );
          }
        )}
      </div>
    </>
  );
};

export default DropDownMenu;