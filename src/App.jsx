import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css"

const App = () => {
  const [data, setData] = useState(null);
  console.log(data)
  const [city,setCity]=useState("Hyderabad")

  useEffect(() => {
        axios
          .get(`http://api.weatherapi.com/v1/current.json?key=45c7b5bfb2ce4547b4873908251910&q=${city}&aqi=no`)
          .then((res) => {setData(res.data)})
          .catch((error) => {
        console.error("Error fetching data:", error);
      });
      }, 
    [city]);

  return (
    <div style={{textAlign:"center"}} id="main">
      <div id="weather">
        <h1 style={{textAlign:"center"}}>Weather Forecast</h1>
      <input placeholder="Enter city" onChange={(e)=>setCity(e.target.value)}></input>

      {data ? (
        <div style={{ marginTop: "20px" }}>
          <h2>{data.location.name}</h2>
          <h4>{data.current.condition.text}</h4>
          <h4>{data.current.temp_c}°C</h4>
          <img src={data.current.condition.icon} alt="Weather Icon" />
        </div>
      ) : (
        <p>Loading...</p>
      )}
      </div>
    </div>
  );
};

export default App;
