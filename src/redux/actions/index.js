import { ADD_SUM, INPUT_CHANGE } from '../constants';

export const inputChange = (name, value) => {
  return {
    type: INPUT_CHANGE,
    payload: { name, value },
  };
};

export const addSumAC = (arraySum, inputsValue1, inputsValue2, inputsValue3, counter) => ({
  type: ADD_SUM,
  payload: {
    arraySum: [...arraySum, inputsValue1 + inputsValue2 + inputsValue3 + counter],
    counter: counter + 1,
  },
});
