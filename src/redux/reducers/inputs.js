import handleActions from 'redux-actions/lib/handleActions';

import { ADD_SUM, INPUT_1, INPUT_2, INPUT_3 } from '../constants';
import initialState from '../data/inputs';

export default handleActions(
  {
    [INPUT_1]: (state, action) => ({
      ...state,
      activeButton: action.payload.activeButton,
      input_1: action.payload.inputValue,
    }),
    [INPUT_2]: (state, action) => ({
      ...state,
      activeButton: action.payload.activeButton,
      input_2: action.payload.inputValue,
    }),
    [INPUT_3]: (state, action) => ({
      ...state,
      activeButton: action.payload.activeButton,
      input_3: action.payload.inputValue,
    }),
    [ADD_SUM]: (state, action) => ({
      ...state,
      arraySum: action.payload.arraySum,
      activeButton: true,
      i: action.payload.i,
      input_1: '',
      input_2: '',
      input_3: '',
    }),
  },
  initialState
);
