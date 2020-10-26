import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';

import App from './App';
import MyListContainer from './containers/list';
import MyInputsContainer from './containers/my-input';

const Routes = () => {
  const pathname = document.location.pathname;
  return (
    <BrowserRouter>
      <App>
        {pathname === '/' && <Redirect to="/inputs" />}
        <Route path="/inputs" component={MyInputsContainer} />
        <Route path="/list" component={MyListContainer} />
      </App>
    </BrowserRouter>
  );
};

export default Routes;
