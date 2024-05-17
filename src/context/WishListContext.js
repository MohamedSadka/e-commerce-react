import React, { createContext, useContext, useState } from "react";

const WishListContext = createContext();

export const useWishList = () => useContext(WishListContext);

export const WishListProvider = ({ children }) => {
  const [wishListItems, setWishListItems] = useState([]);

  const addToWishList = (product) => {
    setWishListItems((prevItems) => [...prevItems, product]);
  };

  const deleteFromWishList = (productId) => {
    setWishListItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  return (
    <WishListContext.Provider
      value={{ wishListItems, addToWishList, deleteFromWishList }}
    >
      {children}
    </WishListContext.Provider>
  );
};
