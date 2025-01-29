import { CartContext } from "./CartContext";
import { useState } from "react";
import { toast } from "react-toastify";

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const productExists = cart.find((product) => product.id === item.id);
    if (productExists) {
      toast.info(`${item.name} ya está en el carrito.`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      setCart([...cart, item]);
      toast.success(`${item.name} fue agregado al carrito.`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const removeFromCart = (id) => {
    const product = cart.find((item) => item.id === id);
    setCart(cart.filter((item) => item.id !== id));
    toast.success(`${product.name} fue eliminado del carrito.`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const getTotalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const getQty = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getQty, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

