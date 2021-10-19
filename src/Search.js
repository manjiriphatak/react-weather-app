import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import CurrentDate from "./CurrentDate";

import TemperatureDisplay from "./TemperatureDisplay";

export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ ready: false });

  function showTemperature(response) {
    setWeather({
      ready: true,

      displayCity: response.data.name,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      feelsLike: response.data.main.feels_like,
      minTemp: response.data.main.temp_min,
      maxTemp: response.data.main.temp_max,
      longitude: response.data.coord.longitude,
      latitude: response.data.coord.latitude,
    });
  }
  function handleSearchCity(event) {
    setCity(event.target.value);
  }
  function showCurrentLocation() {
    navigator.geolocation.getCurrentPosition(searchCurrentLocation);
  }

  function searchCurrentLocation(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1f1facc771125b5abc9220b018556632&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }
  function Searching() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1f1facc771125b5abc9220b018556632&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }
  function handleSubmit(event) {
    event.preventDefault();
    Searching();
  }

  if (weather.ready) {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Enter a City"
            autoComplete="off"
            autoFocus="on"
            className="searchCity"
            onChange={handleSearchCity}
          />
          <input
            type="submit"
            value="Search"
            className="searchButton"
            onClick={handleSubmit}
          />
          <button
            type="button"
            className="btn btn-info locationIcon"
            onClick={showCurrentLocation}
          >
            📍
          </button>
        </form>
        <CurrentDate sendData={weather} />
        <hr />
        <div className="cityDisplay text-uppercase">{weather.displayCity}</div>
        <TemperatureDisplay sendData={weather} />
      </div>
    );
  } else {
    Searching();
    return "loading...";
  }
}
