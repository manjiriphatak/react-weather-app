import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Forecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [displayForecast, setDisplayForecast] = useState("");

  function handleResponse(response) {
    setDisplayForecast(response.data.daily);
    setLoaded(true);
  }
  useEffect(() => {
    setLoaded(false);
  }, [props.coords]);

  if (loaded) {
    return (
      <div className="forcast">
        <div className="row">
          {displayForecast.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="col forecastContainer" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let latitude = props.coords.lat;
    let longitude = props.coords.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=299ee2e1ebf5cfffe52e246ab53d6fb3&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
