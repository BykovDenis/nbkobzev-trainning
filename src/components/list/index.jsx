import './index.css';

import PropTypes from 'prop-types';
import React from 'react';

const List = (props) => {
  let list = props.arraySum.map((input, index) => <li key={index}>{input}</li>);
  return (
    <div>
      <p>Result sum: </p>
      <ul className="ul">{list}</ul>
    </div>
  );
};

List.propTypes = {
  arraySum: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default List;
