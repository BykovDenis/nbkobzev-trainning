import './index.css';

import React from 'react';
import Loader from 'react-loader-spinner';

const Preloader = () => {
  return (
    <div className="preloader">
      <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
    </div>
  );
};

export default Preloader;
