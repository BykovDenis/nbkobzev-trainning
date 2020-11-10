import { combineReducers, createStore } from 'redux';

import inputsReducer from './reducers/inputs';
import widgetReducer from './reducers/widget';

let reducers = combineReducers({
  data: inputsReducer,
  widgetData: widgetReducer,
});

let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
