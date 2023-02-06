import React from "react";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <div className="container text-center">
        <div className="row" id="DayAndTime">
          <div className="d-flex justify-content-center">
            <div className="col-6">
              <h3 id="Day">Tuesday</h3>
            </div>
            <div className="col-6">
              <h3 id="Time">11:42</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="d-flex justify-content-center">
            <div className="col-6">
              <h2 id="CurrentTemperature">16°</h2>
            </div>
            <div className="col-6">
              <img
                id="CurrentDescription"
                src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
                alt="Weather icon"
                width="110"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <ul id="CurrentWeather">
              <li>{props.description}</li>
              <li>
                <strong>Humidity:</strong> {props.humidity}
              </li>
              <li>
                <strong>Wind:</strong> {props.wind}
              </li>
            </ul>
          </div>
          <div className="col-6">
            <ul id="Sun">
              <li>Sunrise: {props.sunriseTime}</li>
              <li>Sunset: {props.sunsetTime}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
