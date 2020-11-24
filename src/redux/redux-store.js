import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';

import inputsReducer from './reducers/inputs';
import widgetReducer from './reducers/widget';

let reducers = combineReducers({
  data: inputsReducer,
  widgetData: widgetReducer,
});

const middlewares = [
  thunkMiddleware,
  promiseMiddleware({
    promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR'],
  }),
];

const keyReduxDevTool = 'REDUX_DEVTOOLS_EXTENSION';
const reduxDevTool = window[keyReduxDevTool];
const devTools = reduxDevTool ? reduxDevTool() : (f) => f;

let store = createStore(reducers, compose(applyMiddleware(...middlewares), devTools));

export default store;
