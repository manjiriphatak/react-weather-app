import React from "react";
import "./DisplayTemperature.css";

export default function DisplayTemperature() {
  return (
    <div className="row temp">
      <span className="col-2 tempDisplay">26</span>
      <span className="col-10 unitButtons">
        <span>
          <button a href="#" className="unitC active">
            °C
          </button>
        </span>

        <span>
          <button a href="#" className="unitF">
            °F
          </button>
        </span>
      </span>
    </div>
  );
}
