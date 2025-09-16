import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Instagram Clone
        </Link>
        <div className="nav-items">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/explore" className="nav-item">Explore</Link>
          <Link to="/profile" className="nav-item">Profile</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
