import React from "react";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <ul id="Forecast">
        <li id="ForecastDay">{props.day}</li>
        <li>
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
            alt="Weather icon"
            width="50"
          />
        </li>
        <li>{props.temperature}</li>
      </ul>
    </div>
  );
}
