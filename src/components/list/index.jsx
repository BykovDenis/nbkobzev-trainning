import './index.css';

import PropTypes from 'prop-types';
import React from 'react';

export default function List(props) {
  return (
    <div>
      <p>Result sum: </p>
      <ul className="ul">
        {props.arraySum.map((input, index) => (
          <li key={index}>{input}</li>
        ))}
      </ul>
    </div>
  );
}

List.propTypes = {
  arraySum: PropTypes.arrayOf(PropTypes.number).isRequired,
};
