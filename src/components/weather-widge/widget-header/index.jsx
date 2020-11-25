/* eslint-disable jsx-a11y/alt-text */
import './index.css';

import PropTypes from 'prop-types';
import React from 'react';

import changeFirstCharUp from '../../../helpers/change-first-char-up';
import CustomizedSwitches from './weather-unit';

const WidgetHeader = (props) => {
  let urlIcon2x = `http://openweathermap.org/img/wn/${props.icon}@2x.png`;
  let urlIcon1x = `http://openweathermap.org/img/wn/${props.icon}.png`;
  let description = changeFirstCharUp(props.description);
  return (
    <div className="header">
      <div>
        <h1 className="titleH1">Current weather and forecasts in your city</h1>
        <h2 className="titleH2">
          Weather in {props.city}, {props.country}
        </h2>
      </div>
      <div className="temp">
        {props.icon !== '' ? <img className="icon" srcSet={urlIcon2x} src={urlIcon1x} alt="icon" /> : ''}
        <div>{props.temp} </div>
        <span className="span">&#176;</span>
        <div className="unit" onClick={props.onUnitClick}>
          {props.unit}
        </div>
        <div className="switch">
          <CustomizedSwitches onUnitClick={props.onUnitClick} unit={props.unit} />
        </div>
      </div>
      <div className="infoData">
        <div className="description">
          <p>{description}</p>
        </div>
        <div className="temp">
          <h3>{props.dataTime}</h3>
          <h3 className="correct">Wrong data?</h3>
        </div>
      </div>
    </div>
  );
};

WidgetHeader.propTypes = {
  icon: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  onUnitClick: PropTypes.func.isRequired,
  unit: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  dataTime: PropTypes.string.isRequired,
};

export default WidgetHeader;
