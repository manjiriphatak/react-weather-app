import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <span>
          <a href="https://github.com/manjiriphatak/react-weather-app">
            {" "}
            Open Source Code on Github{" "}
          </a>
        </span>
        <span> by </span>
        <span>
          <a href="https://www.linkedin.com/in/manjiriphatak">
            {" "}
            Manjiri Phatak
          </a>
        </span>
      </div>
    </div>
  );
}
