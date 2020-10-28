import handleActions from 'redux-actions/lib/handleActions';

import { ADD_SUM, INPUT_CHANGE } from '../constants';
import initialState from '../data/inputs';

export default handleActions(
  {
    [INPUT_CHANGE]: (state, action) => ({
      ...state,
      [action.payload.uinputId]: action.payload.inputValue,
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
