import React from 'react';
import CartWidget from './CartWidget'; 
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brandname">TechStore</div>
      <ul className="categories">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/category/electronics">Electrónica</Link></li>
        <li><Link to="/category/jewelery">Joyería</Link></li>
        <li><Link to="/category/men's clothing">Ropa Hombre</Link></li>
        <li><Link to="/category/women's clothing">Ropa Mujer</Link></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default Navbar;

