import { ADD_SUM, INPUT_VALUE } from '../constants';

export const addValueAC = (payload) => ({
  type: INPUT_VALUE,
  payload: payload,
});
export const addSumAC = () => ({ type: ADD_SUM });
