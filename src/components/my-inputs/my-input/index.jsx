import './index.css';

import PropTypes from 'prop-types';
import React from 'react';

import { charToNumber } from '../../../helpers/char-to-number';

const MyInput = (props) => {
  const onInputValueChange = (event) => {
    const inputValue = charToNumber(event.target.value);
    props.onInputChange({ uinputId: event.target.id, inputValue: inputValue });
  };
  return (
    <div className="item">
      <label htmlFor={props.id} placeholder={props.placeholder} className="label">
        {props.label}
      </label>
      <input
        id={props.id}
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
  placeholder: '',
};

export default MyInput;
