export const getArraySum = (state) => state.data.arraySum;
export const getInputsValue1 = (state) => state.data.input1;
export const getInputsValue2 = (state) => state.data.input2;
export const getInputsValue3 = (state) => state.data.input3;
export const getCounter = (state) => state.data.counter;

export const getIcon = (state) => state.widgetData.dataWeatherWidget.icon;
export const getCity = (state) => state.widgetData.location.city;
export const getCountry = (state) => state.widgetData.location.country;
export const getTemp = (state) => state.widgetData.dataWeatherWidget.temp;
export const getDataTable = (state) => state.widgetData.dataWeatherWidget.dataTable;
export const getSort = (state) => state.widgetData.displayOptions.sort;
export const getSortKey = (state) => state.widgetData.displayOptions.sortKey;
export const getDescription = (state) => state.widgetData.dataWeatherWidget.description;
export const getDataTime = (state) => state.widgetData.dataWeatherWidget.dataTime;
export const getUnit = (state) => state.widgetData.displayOptions.unit;
export const getIsFetching = (state) => state.widgetData.displayOptions.isFetching;
