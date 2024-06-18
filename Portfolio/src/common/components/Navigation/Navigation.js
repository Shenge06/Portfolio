import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <Link to="/">Home</Link>
      <Link to="/about">About Me</Link>
      <Link to="/work">Portfolio</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Navigation;
