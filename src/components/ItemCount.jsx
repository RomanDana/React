import React, { useState, useEffect, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../context/CartContext';
import { toast } from 'react-toastify';

function ItemCount({ item }) {
  const [count, setCount] = useState(0);
  const { addToCart } = useContext(CartContext);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const handleAddToCart = () => {
    if (count > 0) {
      addToCart({ ...item, quantity: count });
      setCount(0);
    } else {
      toast.error('Debes seleccionar al menos 1 unidad.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div>
      <p style={{ border: 'double 2px black', padding: '10px', display: 'inline-block' }}>{count}</p>
      <Button style={{ backgroundColor: '#0c2c6b' }} onClick={handleDecrement} className="ms-2">
        -
      </Button>
      <Button style={{ backgroundColor: '#0c2c6b' }} onClick={handleIncrement} className="ms-2">
        +
      </Button>
      <Button style={{ backgroundColor: '#0c2c6b' }} onClick={handleAddToCart} className="ms-2">
        Agregar al carrito
      </Button>
    </div>
  );
}

export default ItemCount;

