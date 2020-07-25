import React, { useState } from "react";
import "./App.css";

import axios from "axios";

function App() {
  const [pic, setPic] = useState("");

  const getTop = () => {
    axios.get("http://localhost:5000/api/champs/top").then((res) => {
      setPic(res.data.champion_pic);
    });
  };

  const getJng = () => {
    axios.get("http://localhost:5000/api/champs/jungle").then((res) => {
      setPic(res.data.champion_pic);
    });
  };

  const getMid = () => {
    axios.get("http://localhost:5000/api/champs/mid").then((res) => {
      setPic(res.data.champion_pic);
    });
  };

  const getAdc = () => {
    axios.get("http://localhost:5000/api/champs/adc").then((res) => {
      setPic(res.data.champion_pic);
    });
  };

  const getSup = () => {
    axios.get("http://localhost:5000/api/champs/sup").then((res) => {
      setPic(res.data.champion_pic);
    });
  };

  return (
    <div className="App">
      <div>
        <img src={pic} />
      </div>
      <div>
        <button onClick={() => getTop()}>Top</button>
        <button onClick={() => getJng()}>Jungle</button>
        <button onClick={() => getMid()}>Mid</button>
        <button onClick={() => getAdc()}>ADC</button>
        <button onClick={() => getSup()}>Support</button>
      </div>
    </div>
  );
}

export default App;
