import handleActions from 'redux-actions/lib/handleActions';

import { ON_DATA_TABLE_SORT, SET_WIDGET_DATA, TOGGLE_IS_FETHING } from '../constants';
import initialState from '../data/widget';

export default handleActions(
  {
    [SET_WIDGET_DATA]: (state, action) => ({
      ...state,
      dataWeatherWidget: { ...state.dataWeatherWidget, ...action.payload.dataWeatherWidget },
      displayOptions: { ...state.displayOptions, ...action.payload.displayOptions },
      location: { ...state.location, ...action.payload.location },
    }),
    [ON_DATA_TABLE_SORT]: (state, action) => ({
      ...state,
      dataWeatherWidget: { ...state.dataWeatherWidget, ...action.payload.dataWeatherWidget },
      displayOptions: { ...state.displayOptions, ...action.payload.displayOptions },
    }),
    [TOGGLE_IS_FETHING]: (state, action) => ({
      ...state,
      displayOptions: { ...state.displayOptions, ...action.payload.displayOptions },
    }),
  },
  initialState
);
