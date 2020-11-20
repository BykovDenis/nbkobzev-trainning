const weatherWidget = {
  location: { city: '', country: '' },
  displayOptions: { unit: null, sort: null, sortKey: null, isFetching: false, tempUnit: null },
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
  config: { idCity: 524901, appId: 'd04912cef389db95d18b7df8073b26df' },
};

export default weatherWidget;
