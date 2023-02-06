import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SearchEngine from "./SearchEngine";
import CurrentLocation from "./CurrentLocation";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="WeatherAppContainer">
      <div className="container text-center">
        <div className="row">
          <div className="d-flex justify-content-center">
            <div className="col-sm-6">
              <SearchEngine />
            </div>
            <div className="col-sm-6">
              <CurrentLocation />
            </div>
          </div>
        </div>
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
