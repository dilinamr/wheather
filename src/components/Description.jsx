
import React from "react";
import { FaArrowDown, FaArrowUp, FaWind } from "react-icons/fa";
import { BiHappy } from "react-icons/bi";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";
import "./description.css";

export const Description = ({ forecast, units }) => {
  const tempunit = units === "metric" ? "C" : "F";
  const windunit = units === "metric" ? "m/s" : "m/h";
  
  const cards = [
    {
      id: 1,
      icon: <FaArrowDown />,
      title: "Min",
      data: forecast.temp_min.toFixed(),
      unit: tempunit,
    },
    {
      id: 2,
      icon: <FaArrowUp />,
      title: "Max",
      data: forecast.temp_max.toFixed(),
      unit: tempunit,
    },
    {
      id: 3,
      icon: <BiHappy />,
      title: "Feels like",
      data: forecast.feels_like.toFixed(),
      unit: tempunit,
    },
    {
      id: 4,
      icon: <MdCompress />,
      title: "Pressure",
      data: forecast.pressure,
      unit: "hpa",
    },
    {
      id: 5,
      icon: <MdOutlineWaterDrop />,
      title: "Humidity",
      data: forecast.humidity,
      unit: "%",
    },
    {
      id: 6,
      icon: <FaWind />,
      title: "Wind speed",
      data: forecast.speed.toFixed(),
      unit: windunit,
    },
  ];

  return (
    <div className="section section__descriptions">
      {cards.map(({ id, icon, title, data, unit }) => (
        <div key={id} className="card">
          <div className="description__card-icon">
            {icon}
            <small>{title}</small>
          </div>
          <h2>{`${data} ${unit}`}</h2>
        </div>
      ))}
    </div>
  );
};
