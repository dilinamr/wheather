import React from "react";

const TodayWeather = ({ todayWeather, placeName, country }) => {
  return (
    <div className="today-weather">
      <h2>
        {placeName},{country}
      </h2>
      <div className="today-weather-content">
        <img src={todayWeather.iconURL} alt="weather" />
        <p>{todayWeather.description}</p>
        <p>
          {todayWeather.temp.toFixed()}°{todayWeather.unit}
        </p>
      </div>
    </div>
  );
};

export default TodayWeather;
