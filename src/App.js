import "./App.css";
import React, { useState } from "react";

import axios from "axios";
import CurrentDate from "./CurrentDate";
import TemperatureDisplay from "./TemperatureDisplay";
import Icon from "./Icon";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  const [city, setCity] = useState("Toronto");
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

      coords: response.data.coord,
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
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c332a760c937fd62475cfacb274cee28&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }
  function Searching() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c332a760c937fd62475cfacb274cee28&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }
  function handleSubmit(event) {
    event.preventDefault();
    Searching();
  }
  if (weather.ready) {
    return (
      <div className="container">
        <div className="App">
          <div className="row">
            <div className="col-sm-2 col-md-12 col-lg-4">
              <Icon icon={weather.icon} />
            </div>

            <div className="col-sm-4 col-md-12 col-lg-8">
              <h1 className="card-title heading">The Weather Project</h1>
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
                <div className="cityDisplay text-uppercase">
                  {weather.displayCity}
                </div>
                <TemperatureDisplay sendData={weather} />
              </div>
            </div>
          </div>
          <hr />
          <Forecast coords={weather.coords} />
        </div>
        <Footer />
      </div>
    );
  } else {
    Searching();
    return "loading...";
  }
}
