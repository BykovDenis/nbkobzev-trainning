/* eslint-disable jsx-a11y/alt-text */
import './index.css';

import PropTypes from 'prop-types';
import React from 'react';

import changeFirstCharUp from '../../../helpers/change-first-char-up';

const WidgetHader = (props) => {
  let urlIcon2x = `http://openweathermap.org/img/wn/${props.icon}@2x.png`;
  let urlIcon1x = `http://openweathermap.org/img/wn/${props.icon}.png`;
  let urlIcon = `${urlIcon1x} 50w, ${urlIcon2x} 100w`;
  return (
    <div className="header">
      <div>
        <h1 className="titleH1">Current weather and forecasts in your city</h1>
        <h2 className="titleH2">
          Weather in {props.city}, {props.country}
        </h2>
      </div>
      <div className="temp">
        {props.icon !== null ? (
          <img srcSet={urlIcon} sizes="(max-width: 50px) 50px, 100px" src={urlIcon2x} alt="icon" />
        ) : (
          ''
        )}
        <p>{props.temp}</p>
        <span className="span">&#176;</span>
        <p className="unit" onClick={props.onUnitClick}>
          {props.unit}
        </p>
      </div>
      <div className="infoData">
        <div className="description">
          <p>{changeFirstCharUp(props.description)}</p>
        </div>
        <div className="temp">
          <h3>{props.dataTime}</h3>
          <h3 className="correct">Wrong data?</h3>
        </div>
      </div>
    </div>
  );
};

WidgetHader.propTypes = {
  icon: PropTypes.string,
  city: PropTypes.string,
  country: PropTypes.string,
  temp: PropTypes.number,
  onUnitClick: PropTypes.func.isRequired,
  unit: PropTypes.string,
  description: PropTypes.string,
  dataTime: PropTypes.string,
};

export default WidgetHader;
