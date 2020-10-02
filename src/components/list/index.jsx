import React from 'react';
import  './index.css';
import PropTypes from 'prop-types';

export default function List(props) {    
    return (
        <div >
          <p>Result sum: </p>
          <ul className="ul">
            {props.arraySum.map( (input, index) => {
              return (<li key={index}>{input}</li>);
            })}
          </ul>
        </div>
    );
}

List.propTypes = {
  arraySum: PropTypes.array
}