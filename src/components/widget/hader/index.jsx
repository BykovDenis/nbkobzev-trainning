/* eslint-disable jsx-a11y/alt-text */
import './index.css';

import React from 'react';

import ucFirst from '../../../helpers/uc-first';

const WidgetHader = (props) => {
  let urlIcon = `http://openweathermap.org/img/wn/${props.icon}@2x.png`;
  return (
    <div>
      <div>
        <h1 className="titleH1">Current weather and forecasts in your city</h1>
        <h2 className="titleH2">
          Weather in {props.city}, {props.country}
        </h2>
      </div>
      <div className="temp">
        <img src={urlIcon} />
        <h>{props.temp}</h>
        <span className="span">&#176;</span>
        <h>C</h>
      </div>
      <div className="infoData">
        <div className="description">
          <h>{ucFirst(props.description)}</h>
        </div>
        <div>
          <h>{ucFirst(props.dataTime)}</h>
          <h className="correct">Wrong data?</h>
        </div>
      </div>
    </div>
  );
};

export default WidgetHader;
