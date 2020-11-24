import './index.css';

import React from 'react';

const ErrorComponent = (props) => {
  return (
    <div>
      <pre className="error-component"> {props.textError} </pre>
    </div>
  );
};

export default ErrorComponent;
