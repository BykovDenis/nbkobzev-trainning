import { ADD_SUM, INPUT_CHANGE, ON_DATA_TABLE_SORT, SET_WIDGET_DATA } from '../constants';

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
  dataTime
) => ({
  type: SET_WIDGET_DATA,
  payload: { icon, city, country, temp, description, speed, pressure, humidity, sunrise, sunset, dataTable, dataTime },
});

export const onSort = (id, dataTable, sort, sortKey) => {
  let dataTableNew;
  let sortNew;
  if (sortKey === id) {
    if (sort === 'asc') {
      dataTableNew = [].concat(dataTable).sort((a, b) => (a[id] > b[id] ? -1 : 1));
      sortNew = 'desc';
    } else {
      dataTableNew = [].concat(dataTable).sort((a, b) => (a[id] > b[id] ? 1 : -1));
      sortNew = 'asc';
    }
  } else {
    dataTableNew = [].concat(dataTable).sort((a, b) => (a[id] > b[id] ? 1 : -1));
    sortNew = 'asc';
  }
  return {
    type: ON_DATA_TABLE_SORT,
    payload: { dataTable: dataTableNew, sort: sortNew, sortKey: id },
  };
};
