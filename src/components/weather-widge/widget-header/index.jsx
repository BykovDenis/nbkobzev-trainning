/* eslint-disable jsx-a11y/alt-text */
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

import changeFirstCharUp from '../../../helpers/change-first-char-up';
import CustomizedSwitches from './weather-unit';

const styles = () => ({
  widgetHeader: {
    fontFamily: '"PT Sans Narrow", "Tahoma", sans-serif',
  },
  contentH1: {
    color: '#ec6e4c',
    textAlign: 'center',
    fontWeight: 'lighter',
  },
  contentH2: {
    fontWeight: '900',
    color: '#505050',
    fontSize: '40px',
  },
  displayInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  temp: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontWeight: '900',
    fontSize: '60px',
    color: '#505050',
  },
  span: {
    paddingLeft: '10px',
    alignSelf: 'start',
  },
  unit: {
    color: '#505050',
    cursor: 'pointer',
    '&:hover': {
      color: '#ec6e4c',
    },
  },
  infoData: {
    color: '#505050',
    fontSize: '30px',
  },
  description: {
    marginBottom: '10px',
  },
  correct: {
    color: '#ec6e4c',
    paddingLeft: '10px',
  },
  switchGridActive: {
    fontWeight: 900,
    fontSize: '60px',
    color: '#ec6e4c',
  },
  switchGridInactive: {
    fontWeight: 900,
    fontSize: '60px',
    color: '#b7b7b7',
  },
});

const WidgetHeader = (props) => {
  const { classes } = props;
  let urlIcon2x = `http://openweathermap.org/img/wn/${props.icon}@2x.png 2x`;
  let urlIcon1x = `http://openweathermap.org/img/wn/${props.icon}.png`;
  let description = changeFirstCharUp(props.description);
  return (
    <div className={classes.widgetHeader}>
      <div>
        <h1 className={classes.contentH1}>Current weather and forecasts in your city</h1>
        <h2 className={classes.contentH2}>
          Weather in {props.city}, {props.country}
        </h2>
      </div>
      <div className={classes.displayInfo}>
        <div className={classes.temp}>
          {props.icon !== '' ? <img width="100" height="100" srcSet={urlIcon2x} src={urlIcon1x} alt="icon" /> : ''}
          <div>{props.temp} </div>
          <span className={classes.span}>&#176;</span>
          <div className={classes.unit} onClick={props.onUnitClick}>
            {props.unit}
          </div>
        </div>
        <CustomizedSwitches
          onUnitClick={props.onUnitClick}
          unit={props.unit}
          switchGridActive={classes.switchGridActive}
          switchGridInactive={classes.switchGridInactive}
        />
      </div>
      <div className={classes.infoData}>
        <div className={classes.description}>
          <p>{description}</p>
        </div>
        <div className={classes.temp}>
          <h3>{props.dataTime}</h3>
          <h3 className={classes.correct}>Wrong data?</h3>
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

export default withStyles(styles)(WidgetHeader);
