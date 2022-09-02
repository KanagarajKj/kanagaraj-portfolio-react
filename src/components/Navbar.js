import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="links-container">
        <ul className="menu_list">
          <li className="nav_link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav_link">
            <Link to="/about">About</Link>
          </li>
          <li className="nav_link">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="nav_link">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
