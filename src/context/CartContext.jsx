import { createContext, useState } from "react";

// Crear context
export const CartContext = createContext();

// Crear el Provider
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    const index = cart.findIndex((item) => item.id === pizza.id);
    if (index !== -1) {
      const newCart = [...cart];
      newCart[index].count++;
      setCart(newCart);
    } else {
      const newCart = [...cart, { ...pizza, count: 1 }];
      setCart(newCart);
    }
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((pizza) =>
          pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
        )
        .filter((pizza) => pizza.count > 0)
    );
  };

  const totalPrice = cart.reduce(
    (total, pizza) => total + pizza.price * pizza.count,
    0
  );

  const getQuantity = () => {
    return Math.round(cart.reduce((total, pizza) => total + pizza.count, 0));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, decreaseQuantity, totalPrice, getQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
