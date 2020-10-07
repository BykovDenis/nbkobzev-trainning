import './index.css';

import PropTypes from 'prop-types';
import React from 'react';

export default function MyInput(props) {
  return (
    <div className="item">
      <label htmlFor={props.id} placeholder={props.placeholder} className="label">
        {props.label}
      </label>
      <input
        id={props.id}
        type="text"
        placeholder={props.placeholder}
        required
        className="input"
        value={props.value}
        onChange={props.onInputChange}
      />
    </div>
  );
}

MyInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onInputChange: PropTypes.func.isRequired,
};

MyInput.defaultProps = {
  placeholder: '',
};
