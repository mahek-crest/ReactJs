import { useState } from "react";
import "./App.css";
import axios from "axios";
import WeatherCard from "./WeatherCard";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const API_KEY = "2d035fac49a330b7e2a9e9f6491f632c";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      console.log("hello enter was pressed ");

      axios.get(url).then((res) => {
        setData(res);
        console.log(res.data);
      });

      setLocation("");
    }
  };

  return (
    <>
      <div className="p-10">
        <h2 className="text-2xl font bold text-white text-center">
          Weather app - OpenWeatherAPI
        </h2>
        <input
          type="text"
          name="search"
          id="search-bar"
          className="bg-white rounded-xl h-8 border-none my-4 w-full p-3 "
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyDownCapture={searchLocation}
        />
      </div>
      <WeatherCard data={data} />
    </>
  );
}

export default App;
