import React from 'react';
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brandname">TechRomán</div>
      <ul className="categories">
        <li>Home</li>
        <li>Cables</li>
        <li>Cargadores</li>
        <li>Fundas</li>
        <li>Audífonos</li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default Navbar;

