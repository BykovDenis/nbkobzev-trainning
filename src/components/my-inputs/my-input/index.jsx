import { TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

import { charToNumber } from '../../../helpers/char-to-number';

const styles = () => ({
  inputLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    alignContent: 'center',
    flexGrow: 2,
    margin: '5px',
    width: 'calc(100% / 2 - 10px)',
  },
  label: {
    width: '65px',
    font: '20px sans-serif',
    '& label': {
      marginBottom: '0px',
    },
  },
  input: {
    width: 'calc(100% - 65px)',
    fontSize: '20px',
  },
});

const MyInput = (props) => {
  const { classes } = props;
  const onInputValueChange = (event) => {
    const inputValue = charToNumber(event.target.value);
    props.onInputChange(event.target.id, inputValue);
  };
  return (
    <div className={classes.inputLabel}>
      <div className={classes.label}>
        <label htmlFor={props.id} placeholder={props.placeholder}>
          {props.label}
        </label>
      </div>
      <TextField
        id={props.id}
        label={props.placeholder}
        type="text"
        value={props.value}
        onChange={onInputValueChange}
        className={classes.input}
      />
    </div>
  );
};

MyInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onInputChange: PropTypes.func.isRequired,
};

MyInput.defaultProps = {
  placeholder: '',
};

export default withStyles(styles)(MyInput);
