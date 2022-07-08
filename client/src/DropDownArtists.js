import React from "react";

export default function DropDownArtists({ handleChangeArtist }) {
  return (
    <div className="drop-down-container" onChange={handleChangeArtist}>
      <select name="duration" className="drop-down-artists">
        <option value="short_term">last month</option>
        <option value="long_term">all time</option>
        <option value="medium_term">last 6 months</option>
      </select>
    </div>
  );
}
