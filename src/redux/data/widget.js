const initialState = {
  location: { city: null, country: null },
  displayOptions: { unit: null, sort: null, sortKey: null, isFetching: false },
  dataWeatherWidget: {
    icon: null,
    temp: null,
    description: null,
    speed: null,
    pressure: null,
    humidity: null,
    sunrise: null,
    sunset: null,
    dataTable: [],
    dataTime: null,
  },
};
export default initialState;
