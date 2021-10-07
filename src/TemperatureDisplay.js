import React, { useState } from "react";
import "./TemperatureDisplay.css";

export default function TempratureDisplay(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div>
        <div className="row temp">
          <span className="col-2 tempDisplay">
            {props.sendData.temperature}
          </span>
          <span className="col-10 unitButtons">
            <span>
              <button
                a
                href="/"
                className="unitC active "
                onClick={showCelsius}
              >
                °C
              </button>
            </span>

            <span>
              <button a href="/" className="unitF" onClick={showFahrenheit}>
                °F
              </button>
            </span>
          </span>
        </div>
        <div>
          <div className="looksLike">
            <span>{props.sendData.description} </span>
            <span className="divider">| </span>
            <span>Feels Like {Math.round(props.sendData.feelsLike)}°C</span>
          </div>
          <hr />
          <div className="row details">
            <div className="col">
              MIN Temperature : {Math.round(props.sendData.minTemp)} °C
            </div>

            <div className="col">HUMIDITY : {props.sendData.humidity}%</div>
          </div>
          <div className="row details">
            <div className="col">
              MAX Temperature : {Math.round(props.sendData.maxTemp)} °C
            </div>
            <div className="col">WIND : {props.sendData.wind} km/hr</div>
          </div>
        </div>
      </div>
    );
  } else {
    if (unit === "fahrenheit") {
      return (
        <div>
          <div className="row temp">
            <span className="col-2 tempDisplay">
              {Math.round((props.sendData.temperature * 9) / 5 + 32)}
            </span>
            <span className="col-10 unitButtons">
              <span>
                <button a href="/" className="unitC " onClick={showCelsius}>
                  °C
                </button>
              </span>

              <span>
                <button
                  a
                  href="/"
                  className="unitF active"
                  onClick={showFahrenheit}
                >
                  °F
                </button>
              </span>
            </span>
          </div>
          <div>
            <div className="looksLike">
              <span>{props.sendData.description} </span>
              <span className="divider">| </span>
              <span>
                Feels Like {Math.round((props.sendData.feelsLike * 9) / 5 + 32)}
                °F
              </span>
            </div>
            <hr />
            <div className="row details">
              <div className="col">
                MIN Temperature :{" "}
                {Math.round((props.sendData.minTemp * 9) / 5 + 32)} °F
              </div>

              <div className="col">HUMIDITY : {props.sendData.humidity}%</div>
            </div>
            <div className="row details">
              <div className="col">
                MAX Temperature :{" "}
                {Math.round((props.sendData.maxTemp * 9) / 5 + 32)} °F
              </div>
              <div className="col">WIND : {props.sendData.wind} km/hr</div>
            </div>
          </div>
        </div>
      );
    }
  }
}
