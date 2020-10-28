import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/redux-store';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';

const AppRoot = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

ReactDOM.render(<AppRoot />, document.getElementById('root'));

window.store = store;

serviceWorker.unregister();
