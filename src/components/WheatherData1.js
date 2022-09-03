import React from "react";

const WheatherData1 = ({ weatherData }) => {
  return (
    <>
      <div className="toggleconatiner">
        <div>
          <span>weather description : </span>
          <span>{weatherData[0]?.weather[0]?.description}</span>
        </div>
        <div>
          <span>Current temperature : </span>
          <span>{weatherData[0]?.main?.temp}</span>
        </div>
        <div>
          <span>Today's high temperature : </span>
          <span>{weatherData[0]?.main?.temp_max}</span>
        </div>
        <div>
          <span>Today's low temperature : </span>
          <span>{weatherData[0]?.main?.temp_min}</span>
        </div>
      </div>
    </>
  );
};

export default WheatherData1;
