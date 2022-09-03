import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToggle } from "../Slice";
import WheatherData1 from "./WheatherData1";
import WeatherData2 from "./WeatherData2";
const Home = ({ weatherData }) => {
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.toggle);

  return (
    <>
      <div className="weatherdetails">
        <h2>Bangalore weather condition</h2>
        {toggle ? (
          <WheatherData1 weatherData={weatherData} />
        ) : (
          <WeatherData2 weatherData={weatherData} />
        )}
        <button onClick={() => dispatch(setToggle())}>Toggle data</button>
      </div>
    </>
  );
};

export default Home;
