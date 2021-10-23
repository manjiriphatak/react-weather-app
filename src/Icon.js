import React from "react";

export default function Icon(props) {
  return (
    <div>
      <input
        className="mainIcon"
        type="image"
        src={`/icons/${props.icon}.png`}
        width="300px"
        alt="weather icon"
      />
    </div>
  );
}
