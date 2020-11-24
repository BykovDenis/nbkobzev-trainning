import { weatherAPI } from '../../api/weather-information';
import { sortArray } from '../../helpers/sort-array';
import { ADD_SUM, GET_WIDGET_DATA, INPUT_CHANGE, ON_DATA_TABLE_SORT } from '../constants';
import weatherDataMapped from '../mapping/weather-data';

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

export const setWidgetData = (unit, idCity, appId) => ({
  type: GET_WIDGET_DATA,
  payload: getWeatherInformation(unit, idCity, appId),
});

export const onSort = (id, dataTable, sort, sortKey, sortElemets) => {
  let sortNew = id === sortKey ? sortElemets.filter((word) => word !== sort)[0] : 'asc';
  let dataTableNew = sortArray(id, dataTable, sortNew);
  return {
    type: ON_DATA_TABLE_SORT,
    payload: { dataWeatherWidget: { dataTable: dataTableNew }, displayOptions: { sort: sortNew, sortKey: id } },
  };
};

const getWeatherInformation = (unit, idCity, appId) => {
  return new Promise((resolve, reject) => {
    let unitNew = unit === 'metric' ? 'imperial' : 'metric';
    let tempUnit = unitNew === 'metric' ? 'C' : 'F';
    weatherAPI
      .getWeatherInformation(unitNew, idCity, appId)
      .then((response) => {
        let weatherData = weatherDataMapped(response.data, unitNew, tempUnit);
        resolve(weatherData);
      })
      .catch((e) => reject(`Error ${e.code} ${e.message}`));
  });
};
