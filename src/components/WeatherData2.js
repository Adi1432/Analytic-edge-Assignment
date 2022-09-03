import React from "react";

const WeatherData2 = ({ weatherData }) => {
  return (
    <>
      <div className="toggleconatiner">
        <div>
          <span>Wind Speed : </span>
          <span>{weatherData[0]?.wind?.speed}</span>
        </div>
        <div>
          <span>Humidity : </span>
          <span>{weatherData[0]?.main?.humidity}</span>
        </div>
        <div>
          <span>Pressure : </span>
          <span>{weatherData[0]?.main?.pressure}</span>
        </div>
        <div>
          <span>Sunrise Time : </span>
          <span>{weatherData[0]?.sys?.sunrise}</span>
        </div>
        <div>
          <span>Sunset Time : </span>
          <span>{weatherData[0]?.sys?.sunset}</span>
        </div>
      </div>
    </>
  );
};

export default WeatherData2;
