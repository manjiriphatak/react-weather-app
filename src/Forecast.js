import axios from "axios";
import React, { useState } from "react";
import "./Forecast.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [displayForecast, setDisplayForecast] = useState("");

  function handleResponse(response) {
    console.log(response.data.daily);
    setLoaded(true);
    setDisplayForecast(response.data.daily);
  }

  if (loaded) {
    return (
      <div className="forcast">
        <div className="forecastContainer">
          <div>
            <div className="forecastDay">{displayForecast[0].dt}</div>
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
              <span className="maxTemp">{displayForecast[0].temp.max} / </span>
              <span className="minTemp"> {displayForecast[0].temp.min} </span>°C
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let latitude = props.coords.latitude;
    let longitude = props.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=299ee2e1ebf5cfffe52e246ab53d6fb3&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
