import { createContext, useContext, useState } from "react";
import { useProducts } from "../hooks/useProducts";

const AddProductContext = createContext();

export const useAddProductContext = () => useContext(AddProductContext);

export function AddProductProvider({ children }) {
  const { products, refreshProducts } = useProducts();
  const [showCreateProduct, setShowCreateProduct] = useState(false);
  const [isProductCreated, setIsProductCreated] = useState(false);
  const [newProductName, setNewProductName] = useState("");

  const handleCreateProductOpen = () => setShowCreateProduct(true);
  const handleCreateProductClose = () => setShowCreateProduct(false);

  const setProductCreated = (name) => {
    setIsProductCreated(true);
    setNewProductName(name);
  };

  const resetProductCreated = () => {
    setIsProductCreated(false);
    setNewProductName("");
  };

  return (
    <AddProductContext.Provider
      value={{
        products,
        showCreateProduct,
        isProductCreated,
        newProductName,
        handleCreateProductOpen,
        handleCreateProductClose,
        refreshProducts,
        setIsProductCreated,
        setProductCreated,
        resetProductCreated,
      }}
    >
      {children}
    </AddProductContext.Provider>
  );
}
