// export { getFormattedWeekForecast };
const API_KEY = "9c88b64bec8e548b78f3ebba95a32c98";

const makeIconURL = (iconId) =>
  `https://openweathermap.org/img/wn/${iconId}@2x.png`;

const getFormattedWeekForecast = async (city, units = "metric") => {
  const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=${units}`;
  const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);

  // Extract relevant data for the daily forecast
  const dailyForecastList = [];
  const processedDates = new Set();

  data.list.forEach((forecast) => {
    const date = forecast.dt_txt.split(" ")[0];

    // Check if we haven't processed this date already
    if (!processedDates.has(date)) {
      const {
        main: { temp, temp_min, temp_max, pressure, humidity },
        weather,
        wind: { speed },
      } = forecast;

      const { description, icon } = weather[0];

      // Convert date to day of the week .
      const dayOfWeek = new Date(date).toLocaleDateString("en-US", {
        weekday: "long",
      });

      dailyForecastList.push({
        dayOfWeek,
        description,
        iconURL: makeIconURL(icon),
        temp,
        temp_max,
        temp_min,
        pressure,
        humidity,
        speed,
      });

      // Mark this date as processed
      processedDates.add(date);
    }
  });

  const cityName = data.city.name;
  const country = data.city.country;

  return {
    cityName,
    country,
    forecast: dailyForecastList,
  };
};

export { getFormattedWeekForecast };
