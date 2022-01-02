import React from "react";

export default function Icon(props) {
  return (
    <div className="mainIcon">
      <input
        type="image"
        src={`/icons/${props.icon}.png`}
        width="70%"
        alt="weather icon"
      />
    </div>
  );
}
