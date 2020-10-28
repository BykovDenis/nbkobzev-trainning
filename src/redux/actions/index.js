import { ADD_SUM, INPUT_CHANGE } from '../constants';

export const inputChange = (payload) => {
  return {
    type: INPUT_CHANGE,
    payload: payload,
  };
};

export const addSumAC = (payload) => ({
  type: ADD_SUM,
  payload: {
    arraySum: [
      ...payload.arraySum,
      payload.inputsValue1 + payload.inputsValue2 + payload.inputsValue3 + payload.counter,
    ],
    counter: payload.counter + 1,
  },
});
