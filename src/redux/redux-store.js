import { combineReducers, createStore } from 'redux';

import inputsReducer from './reducers/inputs';

let reducers = combineReducers({
  data: inputsReducer,
});

let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
