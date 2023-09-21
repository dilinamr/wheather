import hot from "./assets/hot.jpg";
import cold from "./assets/cold.jpg";
import { Description } from "./components/Description";
import { useEffect, useState } from "react";
import { getFormattedWeatherData } from "./wheatherService";

function App() {
  const [city, Setcity] = useState("mahe");
  const [weather, setWeather] = useState(null);
  const [units, SetUnits] = useState("metric");
  const [bg, Setbg] = useState(hot);
  useEffect(() => {
    const fetchweatherdata = async () => {
      const data = await getFormattedWeatherData(city, units);
      setWeather(data);
      const threshold = units === "metric" ? 20 : 60;
      if (data.temp <= threshold) {
        Setbg(cold);
      } else {
        Setbg(hot);
      }
    };
    fetchweatherdata();
  }, [units, city]);

  const handleclickunit = (e) => {
    const button = e.currentTarget;
    const currentunit = button.innerText.slice(1);
    console.log(currentunit);

    const iscelsius = currentunit === "C";
    button.innerText = iscelsius ? "°F" : "°C";
    SetUnits(iscelsius ? "metric" : "imperial");
  };
  const enter = (e) => {
    if (e.keyCode === 13) {
      Setcity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  };
  return (
    <div className="app" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay">
        {weather && (
          <div className="container">
            <div className="section section__inputs">
              <input
                onKeyDown={enter}
                type="text"
                name="city"
                placeholder="Enter City"
              />
              <button onClick={(e) => handleclickunit(e)}>°F</button>
            </div>

            <div className="section section__temperature">
              <div className="icon">
                <h3>
                  {weather.name}, {weather.country}
                </h3>
                <img src={weather.iconURL} alt="wheather" />
                <h3>{weather.description}</h3>
              </div>
              <div className="temperature">
                <h1>
                  {weather.temp.toFixed()}°{units === "metric" ? "C" : "F"}
                </h1>
              </div>
            </div>

            {/* bottom description */}
            <Description weather={weather} units={units} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
