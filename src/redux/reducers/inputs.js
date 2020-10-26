import handleActions from 'redux-actions/lib/handleActions';

import { ADD_SUM, INPUT_VALUE } from '../constants';
import initialState from '../data/inputs';

export default handleActions(
  {
    [INPUT_VALUE]: (state, action) => ({
      ...state,
      activeButton: state.inputs
        .map((input) => {
          if (input.id === action.payload.uinputId) {
            return action.payload.numberValue;
          }
          return input.value;
        })
        .includes(''),
      inputs: state.inputs.map((input) => {
        if (input.id === action.payload.uinputId) {
          return { ...input, value: action.payload.numberValue };
        }
        return input;
      }),
    }),
    [ADD_SUM]: (state) => ({
      ...state,
      arraySum: [...state.arraySum, state.i + state.inputs.reduce((a, b) => a + b.value, 0)],
      i: state.i + 1,
      inputs: state.inputs.map((input) => {
        return { ...input, value: '' };
      }),
      activeButton: true,
    }),
  },
  initialState
);
