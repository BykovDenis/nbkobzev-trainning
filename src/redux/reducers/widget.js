import handleActions from 'redux-actions/lib/handleActions';

import {
  GET_WIDGET_DATA_ERROR,
  GET_WIDGET_DATA_LOADING,
  GET_WIDGET_DATA_SUCCESS,
  ON_DATA_TABLE_SORT,
} from '../constants';
import initialState from '../data/weather-widget';

export default handleActions(
  {
    [ON_DATA_TABLE_SORT]: (state, action) => ({
      ...state,
      dataWeatherWidget: { ...state.dataWeatherWidget, ...action.payload.dataWeatherWidget },
      displayOptions: { ...state.displayOptions, ...action.payload.displayOptions },
    }),
    [GET_WIDGET_DATA_LOADING]: (state, action) => ({
      ...state,
      displayOptions: { ...state.displayOptions, isFetching: true },
    }),
    [GET_WIDGET_DATA_SUCCESS]: (state, action) => ({
      ...state,
      dataWeatherWidget: { ...state.dataWeatherWidget, ...action.payload.dataWeatherWidget },
      displayOptions: {
        ...state.displayOptions,
        ...action.payload.displayOptions,
        isFetching: false,
        errorLoadingWidgetData: false,
        textError: '',
      },
      location: { ...state.location, ...action.payload.location },
    }),
    [GET_WIDGET_DATA_ERROR]: (state, action) => ({
      ...state,
      displayOptions: {
        ...state.displayOptions,
        isFetching: false,
        errorLoadingWidgetData: true,
        textError: action.payload,
      },
    }),
  },
  initialState
);
