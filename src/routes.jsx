import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './App';
import Test from './components/test';
import MyListContainer from './containers/list';
import MyInputsContainer from './containers/my-input';
import WeatherWidget from './containers/weather-widget';

const Routes = () => {
  return (
    <BrowserRouter>
      <App>
        <Route exact path="/" component={WeatherWidget} />
        <Route path="/inputs" component={MyInputsContainer} />
        <Route path="/list" component={MyListContainer} />
        <Route path="/weather" component={WeatherWidget} />
        <Route path="/1" component={Test} />
      </App>
    </BrowserRouter>
  );
};

export default Routes;
