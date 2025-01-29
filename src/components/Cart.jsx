import { useContext } from 'react';  
import { CartContext } from '../context/CartContext';
import CartList from './CartList';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate(); 

  if (cart.length === 0) {
    return <h2>No hay productos en el carrito...</h2>;
  }

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div>
      <CartList items={cart} />
      <p>Total: ${total.toFixed(2)}</p>
      <Button onClick={handleCheckout} variant="primary">
        Finalizar Compra
      </Button>
    </div>
  );
}

export default Cart;
