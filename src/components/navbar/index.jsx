import './index.css';

import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_item">
        <NavLink to="/inputs">Inputs</NavLink>
      </div>
      <div className="navbar_item">
        <NavLink to="/list">List of sum</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
