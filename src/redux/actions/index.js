import { weatherAPI } from '../../api/weather-information';
import { sortArray } from '../../helpers/sort-array';
import { ADD_SUM, INPUT_CHANGE, ON_DATA_TABLE_SORT, SET_WIDGET_DATA, TOGGLE_IS_FETHING } from '../constants';

export const inputChange = (name, value) => {
  return {
    type: INPUT_CHANGE,
    payload: { name, value },
  };
};

export const addSumAC = (arraySum, inputsValue1, inputsValue2, inputsValue3, counter) => ({
  type: ADD_SUM,
  payload: {
    arraySum: [...arraySum, inputsValue1 + inputsValue2 + inputsValue3 + counter],
    counter: counter + 1,
  },
});

export const setFetching = (isFetching) => ({ type: TOGGLE_IS_FETHING, payload: { displayOptions: { isFetching } } });

export const setWidgetData = (
  icon,
  city,
  country,
  temp,
  description,
  speed,
  pressure,
  humidity,
  sunrise,
  sunset,
  dataTable,
  dataTime,
  unit
) => ({
  type: SET_WIDGET_DATA,
  payload: {
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
    displayOptions: { unit },
  },
});

export const onSort = (id, dataTable, sort, sortKey) => {
  let { dataTableNew, sortNew } = sortArray(id, dataTable, sort, sortKey);
  return {
    type: ON_DATA_TABLE_SORT,
    payload: { dataWeatherWidget: { dataTable: dataTableNew }, displayOptions: { sort: sortNew, sortKey: id } },
  };
};

export const getWeatherInformation = (unit) => {
  return (dispatch) => {
    let unitNew = unit === 'metric' ? 'imperial' : 'metric';
    dispatch(setFetching(true));
    weatherAPI.getWeatherInformation(unitNew).then((response) => {
      let icon = response.data.weather[0].icon;
      let city = response.data.name;
      let country = response.data.sys.country;
      let temp = Math.round(response.data.main.temp);
      let description = response.data.weather[0].description;
      let speed = `${response.data.wind.speed} ${unitNew === 'metric' ? 'm/s' : 'm/h'}`;
      let pressure = `${response.data.main.pressure} hpa`;
      let humidity = `${response.data.main.humidity} %`;
      let sunriseDate = new Date(response.data.sys.sunrise * 1000);
      let sunrise = `${sunriseDate.getHours()}:${sunriseDate.getMinutes()}`;
      let sunsetDate = new Date(response.data.sys.sunset * 1000);
      let sunset = `${sunsetDate.getHours()}:${sunsetDate.getMinutes()}`;
      let { lon, lat } = response.data.coord;
      let dt = new Date(response.data.dt * 1000);
      let dataTime = `${dt.getHours()}:${dt.getMinutes()} ${dt.toLocaleString('en', {
        month: 'short',
        day: 'numeric',
      })}`;
      let dataTable = [
        { parameter: 'Wind', value: speed },
        { parameter: 'Pressure', value: pressure },
        { parameter: 'Humidity', value: humidity },
        { parameter: 'Sunrise', value: sunrise },
        { parameter: 'Sunset', value: sunset },
        { parameter: 'Geo coords', value: `[${lat}, ${lon}]` },
      ];
      dispatch(
        setWidgetData(
          icon,
          city,
          country,
          temp,
          description,
          speed,
          pressure,
          humidity,
          sunrise,
          sunset,
          dataTable,
          dataTime,
          unitNew
        )
      );
      dispatch(setFetching(false));
    });
  };
};
