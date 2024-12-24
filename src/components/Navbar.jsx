import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brandname">TechStore</div>
      <ul className="categories">
        <Link to="/">Home</Link>
        <Link to="/category/electronics">Electrónica</Link>
        <Link to="/category/jewelery">Joyería</Link>
        <Link to="/category/men's clothing">Ropa Hombre</Link>
        <Link to="/category/women's clothing">Ropa Mujer</Link>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default Navbar;

