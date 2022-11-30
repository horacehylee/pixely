import React, { useState } from "react";
import DropDownMenu from "./DropdownMenu";

const items = () => {
  return ["Select", "Settings", "Save Image as", "Exit"];
}

const FileMenuItems: React.FC = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [selectItem, setSelectItem] = useState("");

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }
  };

  const itemSelection = (item: string): void => {
    setSelectItem(item);
  };
  
  return (
    <button
      className={showDropDown ? "active" : "Menu-items Menu-button"}
      onClick={(): void => toggleDropDown()}
      onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
        dismissHandler(e)
      }
    > 
      <label>File</label>
      {showDropDown && (
        <DropDownMenu
          items={items()}
          showDropDown={false}
          toggleDropDown={(): void => toggleDropDown()}
          itemSelection={itemSelection}
        />
      )}
    </button>
  );
};

export const FileMenu: React.FC = () => {
  return <FileMenuItems />;    
};
