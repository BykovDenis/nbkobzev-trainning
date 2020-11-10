import * as axios from 'axios';

export const getWeatherInformation = () => {
  return axios.get(
    'http://api.openweathermap.org/data/2.5/weather?id=524901&appid=d04912cef389db95d18b7df8073b26df&units=metric'
  );
};
