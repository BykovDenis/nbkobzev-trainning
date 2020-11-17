import * as axios from 'axios';

const idCity = 524901;
const appid = 'd04912cef389db95d18b7df8073b26df';

const instance = axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5/weather',
});
export const weatherAPI = {
  getWeatherInformation(unit) {
    return instance.get(`?id=${idCity}&appid=${appid}&units=${unit}`);
  },
};
