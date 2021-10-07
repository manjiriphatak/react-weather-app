import React from "react";
import "./CurrentDate.css";

export default function CurrentDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let day = days[props.sendData.date.getDay()];

  let hours = props.sendData.date.getHours();
  let month = months[props.sendData.date.getMonth()];
  let date = props.sendData.date.getDate();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = props.sendData.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <span className="CurrentDate text-uppercase">
      {day}, {date} {month}, {hours}:{minutes}
    </span>
  );
}
