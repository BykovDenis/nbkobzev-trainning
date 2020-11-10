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
        <text>{props.temp}</text>
        <span className="span">&#176;</span>
        <text>C</text>
      </div>
      <div className="infoData">
        <div className="description">
          <text>{ucFirst(props.description)}</text>
        </div>
        <div>
          <text>{ucFirst(props.dataTime)}</text>
          <text className="correct">Wrong data?</text>
        </div>
      </div>
    </div>
  );
};

export default WidgetHader;
