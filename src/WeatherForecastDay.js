import React from "react";

export default function WeatherForecastDay(props) {
  function displayDay() {
    let date = new Date(props.data.dt * 1000);

    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    return days[day];
  }
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }
  return (
    <div>
      <div className="forecastDay">{displayDay()}</div>
      <div>
        <input
          className="forecastIcon"
          type="image"
          src={`./icons/${props.data.weather[0].icon}.png`}
          width="60px"
          alt="forecast icon"
        />
      </div>
      <div className="forecastTemperature">
        <span className="minTemp"> {minTemp()} </span>
        <span className="maxTemp">{maxTemp()} </span>
      </div>
    </div>
  );
}
