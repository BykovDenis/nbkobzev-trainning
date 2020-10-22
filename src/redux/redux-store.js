import { combineReducers, createStore } from 'redux';

import inputsReducer from './reducers/Iinputs';

let reducers = combineReducers({
  data: inputsReducer,
});

let store = createStore(reducers);

export default store;
