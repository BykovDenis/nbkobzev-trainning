import handleActions from 'redux-actions/lib/handleActions';

import { ON_DATA_TABLE_SORT, SET_WIDGET_DATA } from '../constants';
import initialState from '../data/widget';

export default handleActions(
  {
    [SET_WIDGET_DATA]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [SET_WIDGET_DATA]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ON_DATA_TABLE_SORT]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  initialState
);
