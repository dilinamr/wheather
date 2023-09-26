import hot from "./assets/hot.jpg";
import cold from "./assets/cold.jpg";
import { Description } from "./components/Description";
import { useEffect, useState } from "react";
import { getFormattedWeekForecast } from "./wheatherService";
import TodayWeather from "./components/TodayWeather";

function App() {
  const [city, Setcity] = useState("mahe");
  const [forecast, setForecast] = useState(null);
  const [units, SetUnits] = useState("metric");
  const [bg, Setbg] = useState(hot);

  useEffect(() => {
    const fetchForecastData = async () => {
      const data = await getFormattedWeekForecast(city, units);
      setForecast(data);
      const threshold = units === "metric" ? 20 : 60;
      if (data.forecast[0].temp <= threshold) {
        Setbg(cold);
      } else {
        Setbg(hot);
      }
    };
    fetchForecastData();
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
        {forecast && (
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
<div>
  <TodayWeather todayWeather={forecast.forecast[0]} country={forecast.country} placeName={forecast.cityName}/>
</div>
{/* forecast */}

            <div className=" section__forecast">
              {forecast.forecast.map((dailyForecast, index) => (
                <div key={index} className="forecast-item">
                  <div className="forecast-item-header">
                    <h3>{dailyForecast.dayOfWeek}</h3> {/* Display dayOfWeek instead of date */}
                  </div>
                  <div className="forecast-item-content">
                    <img src={dailyForecast.iconURL} alt="weather" />
                    <p>{dailyForecast.description}</p>
                    <p>
                      {dailyForecast.temp.toFixed()}°{units === "metric" ? "C" : "F"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
