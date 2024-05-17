import { createContext, useContext, useState } from "react";


const CartContext = createContext();

export const useCart =()=> useContext(CartContext);

export const CartProvider = ({children}) => {
  const [cartItems , setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (item) => {
    setCartItems([...cartItems , item])
    setCartCount(cartCount + 1);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item !== productId))
    setCartCount(cartCount - 1);
  }

  const isProductInCart = (productId) => {
    return cartItems.includes(productId);
  };

  const updateQuantity = (productId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: parseInt(quantity) } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{cartItems , addToCart , removeFromCart ,isProductInCart , updateQuantity}}>
      {children}
    </CartContext.Provider>
  )
}