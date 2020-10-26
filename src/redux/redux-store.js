import { combineReducers, createStore } from 'redux';

import inputsReducer from './reducers/inputs';

let reducers = combineReducers({
  data: inputsReducer,
});

let store = createStore(reducers);

export default store;
