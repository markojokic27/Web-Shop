import { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const contextValue = {
    products,
    setProducts,
    cart,
    setCart
    
  };

  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
};