import { createContext, useContext, useEffect, useState } from "react";


const CartContext = createContext();

export const useCart =()=> useContext(CartContext);

export const CartProvider = ({children}) => {
  const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const [cartItems, setCartItems] = useState(savedCartItems);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (item) => {
    setCartItems([...cartItems , item])
    setCartCount(cartCount + 1);
    localStorage.setItem("cartItems", JSON.stringify([...cartItems, item]));
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
    setCartCount(cartCount - 1);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };
  

  const isProductInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  const updateQuantity = (productId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: parseInt(quantity) } : item
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);


  return (
    <CartContext.Provider value={{cartItems , addToCart , removeFromCart ,isProductInCart , updateQuantity, setCartItems}}>
      {children}
    </CartContext.Provider>
  )
}