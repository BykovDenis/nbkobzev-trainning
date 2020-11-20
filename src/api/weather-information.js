import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5/weather',
});
export const weatherAPI = {
  getWeatherInformation(unit, idCity, appId) {
    return instance.get(`?id=${idCity}&appid=${appId}&units=${unit}`);
  },
};
