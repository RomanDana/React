import React, { useState, useContext } from 'react';
import { FaCartPlus } from "react-icons/fa";
import { CartContext } from '../context/CartContext';
import Cart from './Cart';
import '../App.css';

function CartWidget() {
  const { getQty } = useContext(CartContext);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <div>
      <div onClick={toggleCartVisibility} className="cartWidget">
        <FaCartPlus />
        <span className="notificacion">{getQty()}</span>
      </div>
      {isCartVisible && <div className="cartOverlay" onClick={toggleCartVisibility}></div>}
      {isCartVisible && (
        <div className="cartPopup">
          <h2>Carrito de Compras</h2>
          <Cart />
        </div>
      )}
    </div>
  );
}

export default CartWidget;
