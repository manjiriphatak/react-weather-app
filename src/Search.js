import React, { useState } from "react";
import "./Search.css";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState(" ");

  function showTemperature(response) {
    alert(`Fetching Weather for ${response.data.name}`);
  }
  function handleSearchCity(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=be0dd8f9f76dc215539a73ac2ef0145a
&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }

  return (
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
  );
}
