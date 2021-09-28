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
          <span className="maxTemp">23°C / </span>
          <span className="minTemp">10°C</span>
        </div>
      </div>
      <div className="forecastContainer">
        <div className="forecastDay">Tue</div>
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
          <span className="maxTemp">23°C / </span>
          <span className="minTemp">10°C</span>
        </div>
      </div>
      <div className="forecastContainer">
        <div className="forecastDay">Wed</div>
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
          <span className="maxTemp">23°C / </span>
          <span className="minTemp">10°C</span>
        </div>
      </div>
      <div className="forecastContainer">
        <div className="forecastDay">Thur</div>
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
          <span className="maxTemp">23°C / </span>
          <span className="minTemp">10°C</span>
        </div>
      </div>
      <div className="forecastContainer">
        <div className="forecastDay">Fri</div>
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
          <span className="maxTemp">23°C / </span>
          <span className="minTemp">10°C</span>
        </div>
      </div>
      <div className="forecastContainer">
        <div className="forecastDay">Sat</div>
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
          <span className="maxTemp">23°C / </span>
          <span className="minTemp">10°C</span>
        </div>
      </div>
      <div className="forecastContainer">
        <div className="forecastDay">Sun</div>
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
          <span className="maxTemp">23°C / </span>
          <span className="minTemp">10°C</span>
        </div>
      </div>
    </div>
  );
}
