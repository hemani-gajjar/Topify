import React from "react";

export default function DropDownMenu({ changeSelect }) {
  return (
    <div className="drop-down-container" onChange={changeSelect}>
      <select name="duration" className="drop-down-tracks">
        <option value="long_term">all time</option>
        <option value="medium_term">last 6 months</option>
        <option value="short_term">last month</option>
      </select>
    </div>
  );
}
