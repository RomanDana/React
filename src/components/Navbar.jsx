import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import CartWidget from './CartWidget';

const Navbar = () => {
  const location = useLocation(); 

  return (
    <nav className="navbar">
      <div className="brandname">TechStore</div>
      <ul className="categories">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/category/televisores">Televisores</Link></li>
        <li><Link to="/category/tablets">Tablets</Link></li>
        <li><Link to="/category/smartphones">Smartphones</Link></li>
        <li><Link to="/category/notebooks">Notebooks</Link></li>
      </ul>
      {location.pathname !== '/checkout' && <CartWidget />}
    </nav>
  );
};

export default Navbar;

