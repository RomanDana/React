import React from 'react';
import '../App.css';  
import { FaCartPlus } from "react-icons/fa";

const CartWidget = () => {
  return (
    <div className="cartWidget">
      <FaCartPlus /> 
      <span className="notificacion">3</span>
    </div>
  );
};

export default CartWidget;

