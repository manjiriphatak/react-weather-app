import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="forcast">
      <div className="forecastContainer">
        <div className="forecastDay">Mon</div>
        <div>
          <input
            className="forecastIcon"
            type="image"
            src="./icons/01d.png"
            width="60px"
            alt="forecast icon"
          />
        </div>
        <div className="forecastTemperature">
          <span className="maxTemp">19 / </span>
          <span className="minTemp"> 10 </span>°C
        </div>
      </div>
    </div>
  );
}
