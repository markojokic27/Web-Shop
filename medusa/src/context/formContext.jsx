import { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  

  const contextValue = {
    products,
    setProducts
    
  };

  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
};