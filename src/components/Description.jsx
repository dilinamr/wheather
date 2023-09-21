import React from "react";
import { FaArrowDown, FaArrowUp, FaWind } from "react-icons/fa";
import { BiHappy } from "react-icons/bi";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";
import "./description.css";
export const Description = ({ weather, units }) => {
  const tempunit = units === "metric" ? "C" : "F";
  const windunit = units === "metric" ? "m/s" : "m/h";
  const cards = [
    {
      id: 1,
      icon: <FaArrowDown />,
      title: "Min",
      data: weather.temp_min.toFixed(),
      unit: tempunit,
    },
    {
      id: 2,
      icon: <FaArrowUp />,
      title: "Max",
      data: weather.temp_max.toFixed(),
      unit: tempunit,
    },
    {
      id: 3,
      icon: <BiHappy />,
      title: "Feels like",
      data: weather.feels_like.toFixed(),
      unit: tempunit,
    },
    {
      id: 4,
      icon: <MdCompress />,
      title: "pressure",
      data: weather.pressure,
      unit: "hpa",
    },
    {
      id: 5,
      icon: <MdOutlineWaterDrop />,
      title: "Wind speed",
      data: weather.humidity,
      unit: "%",
    },
    {
      id: 6,
      icon: <FaWind />,
      title: "Wind speed",
      data: weather.speed.toFixed(),
      unit: windunit,
    },
  ];
  return (
    <div className="section section__descriptions">
     {cards.map(({id,icon,title,data,unit})=>(

      <div key={id} className="card">
        <div className="description__card-icon">
         {icon}
          <small>{title}</small>
        </div>
        <h2>{`${data} ${unit}`} </h2>
      </div>


     ))}
    </div>
  );
};
