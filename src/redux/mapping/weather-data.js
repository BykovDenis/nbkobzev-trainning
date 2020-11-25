const weatherDataMapped = (weatherData, unitNew, tempUnit) => {
  let icon = weatherData.weather[0].icon || '';
  let city = weatherData.name;
  let country = weatherData.sys.country;
  let temp = Math.round(weatherData.main.temp);
  let description = weatherData.weather[0].description;
  let speed = `${weatherData.wind.speed} ${unitNew === 'metric' ? 'm/s' : 'm/h'}`;
  let pressure = `${weatherData.main.pressure} hpa`;
  let humidity = `${weatherData.main.humidity} %`;
  let sunriseDate = new Date(weatherData.sys.sunrise * 1000);
  let sunrise = `${sunriseDate.getHours()}:${sunriseDate.getMinutes()}`;
  let sunsetDate = new Date(weatherData.sys.sunset * 1000);
  let sunset = `${sunsetDate.getHours()}:${sunsetDate.getMinutes()}`;
  let { lon, lat } = weatherData.coord;
  let dt = new Date(weatherData.dt * 1000);
  let dataTime = `${dt.getHours()}:${dt.getMinutes()} ${dt.toLocaleString('en', {
    month: 'short',
    day: 'numeric',
  })}`;
  let sortKey = null;
  let dataTable = [
    { parameter: 'Wind', value: speed },
    { parameter: 'Pressure', value: pressure },
    { parameter: 'Humidity', value: humidity },
    { parameter: 'Sunrise', value: sunrise },
    { parameter: 'Sunset', value: sunset },
    { parameter: 'Geo coords', value: `[${lat}, ${lon}]` },
  ];
  return {
    dataWeatherWidget: {
      icon,
      temp,
      description,
      speed,
      pressure,
      humidity,
      sunrise,
      sunset,
      dataTable,
      dataTime,
    },
    location: {
      city,
      country,
    },
    displayOptions: { unit: unitNew, sortKey, tempUnit },
  };
};

export default weatherDataMapped;
