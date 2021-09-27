import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <form>
      <input
        type="text"
        placeholder="Submit your City"
        autocomplete="off"
        autofocus="on"
        className="searchCity"
      />
      <input type="submit" value="Search" className="searchButton" />
      <button type="button" className="btn btn-info locationIcon">
        📍
      </button>
    </form>
  );
}
