import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import CurrentDate from "./CurrentDate";
import CityDisplay from "./CityDisplay";
import DisplayTemperature from "./DisplayTemperature";
import TempDescription from "./TempDescription";
import WeatherElements from "./WeatherElements";

export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ ready: false });

  function showTemperature(response) {
    setWeather({
      ready: true,
      displayCity: response.data.name,
    });
  }
  function handleSearchCity(event) {
    setCity(event.target.value);
  }

  function Searching() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=be0dd8f9f76dc215539a73ac2ef0145a
  &units=metric`;
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
            autocomplete="off"
            autofocus="on"
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
            onClick={showTemperature}
          >
            📍
          </button>
        </form>
        <CurrentDate />

        <hr />

        <CityDisplay sendCity={weather.displayCity} />
        <DisplayTemperature />
        <TempDescription />
        <hr />

        <WeatherElements />
      </div>
    );
  } else {
    Searching();
    return "loading...";
  }
}
