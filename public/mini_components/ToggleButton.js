import React from "react";
import "../css/toggleButton.css";

function toggleButton({handleClick}) {
  return (
    <div className="toggle-outer-div">
      <div className="toggle-switch-button" onClick={handleClick}>
        <input className="toggle-switch-button-checkbox" type="checkbox" />
        <label className="toggle-switch-button-label" htmlFor="">
          <span className="toggle-switch-button-label-span">Friends</span>
        </label>
      </div>
    </div>
  );
}

export default toggleButton;
