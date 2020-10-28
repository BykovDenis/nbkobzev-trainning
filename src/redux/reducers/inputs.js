import handleActions from 'redux-actions/lib/handleActions';

import { ADD_SUM, INPUT_1, INPUT_2, INPUT_3 } from '../constants';
import initialState from '../data/inputs';

export default handleActions(
  {
    [INPUT_1]: (state, action) => ({
      ...state,
      input1: action.payload,
    }),
    [INPUT_2]: (state, action) => ({
      ...state,
      input2: action.payload,
    }),
    [INPUT_3]: (state, action) => ({
      ...state,
      input3: action.payload,
    }),
    [ADD_SUM]: (state, action) => ({
      ...state,
      arraySum: action.payload.arraySum,
      counter: action.payload.counter,
      input1: '',
      input2: '',
      input3: '',
    }),
  },
  initialState
);
