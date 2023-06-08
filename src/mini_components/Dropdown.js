import React from "react";
import "../CSS/dropDown.css";

function Dropdown() {
  return (
    <div className="community-dropdown-div">
      <div className="sort-label">Sort by:</div>
      <div className="community-select-dropdown">
        <select>
          <option value="Option 1">Name</option>
          <option value="Option 2">Recently Added</option>
        </select>
      </div>
    </div>
  );
}

export default Dropdown;
