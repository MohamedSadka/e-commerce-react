import { createContext, useContext, useState } from "react";


const AddedProductsContext = createContext();

export const useAddedProducts = () => {
  return useContext(AddedProductsContext);
}

export const AddedProductsProvider = ({children}) => {
  const [addedProducts , setAddedProducts] = useState([]);

  const addProduct = (productId) => {
    setAddedProducts((prevState) => ({...prevState , [productId] : true}));
  }

  const removeProduct = (productId) => {
    setAddedProducts((prevState) => {
      const updatedState = { ...prevState };
      delete updatedState[productId];
      return updatedState;
    });
  };

  const isProductAdded = (productId) => {
    return addedProducts[productId];
  };

  return (
    <AddedProductsContext.Provider value={{addedProducts ,addProduct , removeProduct , isProductAdded}}>
      {children}
    </AddedProductsContext.Provider>
  )
}