import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  const [displayForecast, setDisplayForecast] = useState("");
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response.data.daily);
    setLoaded(true);
    setDisplayForecast(response.data.daily);
  }

  if (loaded) {
    return (
      <div className="forcast">
        <div className="forecastContainer">
          <div className="forecastDay">4</div>
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
            <span className="minTemp">{displayForecast[0].temp.min} °C</span>
          </div>
        </div>
      </div>
    );
  } else {
    let latitude = props.coords.latitude;
    let longitude = props.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=1f1facc771125b5abc9220b018556632&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
