import { ADD_SUM, INPUT_1, INPUT_2, INPUT_3 } from '../constants';

export const inputChange = (payload) => {
  if (payload.uinputId === 'input1') {
    return {
      type: INPUT_1,
      payload: payload.inputValue,
    };
  } else if (payload.uinputId === 'input2') {
    return {
      type: INPUT_2,
      payload: payload.inputValue,
    };
  } else if (payload.uinputId === 'input3') {
    return {
      type: INPUT_3,
      payload: payload.inputValue,
    };
  }
};

export const addSumAC = (payload) => ({
  type: ADD_SUM,
  payload: payload,
});
