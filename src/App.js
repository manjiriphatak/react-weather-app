import "./App.css";

import Search from "./Search";
import CurrentDate from "./CurrentDate";
import CityDisplay from "./CityDisplay";
import DisplayTemperature from "./DisplayTemperature";
import TempDescription from "./TempDescription";
import ForecastElements from "./ForecastElements";

export default function App() {
  return (
    <div>
      <div className="App">
        <div className="row">
          <div className="col-sm-2 col-md-12 col-lg-4">
            <input
              className="mainIcon"
              type="image"
              src="https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_3-1024.png"
              width="300px"
              alt="weather icon"
            />
          </div>

          <div className="col-sm-4 col-md-12 col-lg-8">
            <h1 className="card-title heading">The Weather Project</h1>
            <Search />
            <CurrentDate />

            <hr />

            <CityDisplay />
            <DisplayTemperature />
            <TempDescription />
            <hr />

            <ForecastElements />
          </div>
        </div>
      </div>
    </div>
  );
}