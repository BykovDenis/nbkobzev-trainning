import { ADD_SUM, INPUT_1, INPUT_2, INPUT_3 } from '../constants';

export const addValueInput1AC = (payload) => ({
  type: INPUT_1,
  payload: payload,
});
export const addValueInput2AC = (payload) => ({
  type: INPUT_2,
  payload: payload,
});
export const addValueInput3AC = (payload) => ({
  type: INPUT_3,
  payload: payload,
});
export const addSumAC = (payload) => ({
  type: ADD_SUM,
  payload: payload,
});
