import React from "react";
import "./WeatherElements.css";

export default function WeatherElements() {
  return (
    <div>
      <div className="row details">
        <div className="col">SUNRISE :</div>

        <div className="col">HUMIDITY :</div>
      </div>
      <div className="row details">
        <div className="col">SUNSET :</div>
        <div className="col">WIND :</div>
      </div>
    </div>
  );
}
