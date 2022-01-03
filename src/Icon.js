import React from "react";

export default function Icon(props) {
  return (
    <div className="mainIcon-section">
      <input
        type="image"
        src={`/icons/${props.icon}.png`}
        className="mainIcon "
        alt="weather icon"
      />
    </div>
  );
}
