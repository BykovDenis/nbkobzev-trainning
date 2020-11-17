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

let store = createStore(
  reducers,
  compose(applyMiddleware(...middlewares), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default store;
