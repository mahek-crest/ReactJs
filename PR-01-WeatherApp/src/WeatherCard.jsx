import React from "react";

const WeatherCard = ({ data }) => {
  const weather = data.data;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-auto">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          {weather ? weather.name : "Location"}
        </div>
        <div className="text-gray-700 text-base">
          Visibility : {weather ? weather.visibility : null}
        </div>
        <div className="text-gray-700 text-base">
          Temperature : {weather ? weather.main.temp : null}&deg;F
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
