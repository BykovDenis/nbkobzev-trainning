import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './App';
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
      </App>
    </BrowserRouter>
  );
};

export default Routes;
