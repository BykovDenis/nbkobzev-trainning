import React from 'react';
import './index.css';
import PropTypes from 'prop-types';

export default function MyInput(props) {
    return (
        <div className="item">
            <label htmlFor={props.id} placeholder={props.placeholder} className="label">{props.label}</label>
            <input id={props.id} type="text" placeholder={props.placeholder} required className="input" value={props.value} onChange={props.onInputChange} />
        </div>
    );
}

MyInput.propTypes = {
    id: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.number,
    onInputChange: PropTypes.func
}