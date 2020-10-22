import './index.css';

import PropTypes from 'prop-types';
import React from 'react';

const MyInput = (props) => {
  const onInputValueChange = (event) => {
    const REGEXP = /[0-9]/g;
    const inputValueText = event.target.value;
    const validCharsArray = inputValueText.match(REGEXP) || [];
    const inputValueNumber = parseInt(validCharsArray.join(''), 10);
    const inputValue = isNaN(inputValueNumber) === false ? inputValueNumber : '';
    props.onInputChange(event.target.id, inputValue);
  };
  return (
    <div className="item">
      <label htmlFor={props.id} placeholder={props.placeholder} className="label">
        {props.label}
      </label>
      <input
        id={props.id}
        key={props.key}
        type="text"
        placeholder={props.placeholder}
        className="input"
        value={props.value}
        onChange={onInputValueChange}
        required
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
  placeholder: PropTypes.string,
};

export default MyInput;
