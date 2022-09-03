import React, { useState, useEffect } from "react";
import "./App.css";
import Graph from "./components/Graph";
import Home from "./components/Home";
import axios from "axios";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async (_) => {
      const res = await axios.get(
        "https://api.openweathermap.org/data/2.5/forecast?q=Bangalore&appid=9d40f887bbcd3ca64d48a1fdaf985329"
      );
      setData(res.data.list);
    })();
  }, []);
  return (
    <>
      <Home weatherData={data} />
      <Graph data={data} />;
    </>
  );
}

export default App;
