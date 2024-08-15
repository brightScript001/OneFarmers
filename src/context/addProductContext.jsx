import { createContext, useContext, useState } from "react";
import { useProducts } from "../hooks/useProducts";

const AddProductContext = createContext();

export const useAddProductContext = () => useContext(AddProductContext);

export function AddProductProvider({ children }) {
  const { products, refreshProducts } = useProducts();
  const [showCreateProduct, setShowCreateProduct] = useState(false);

  const handleCreateProductOpen = () => setShowCreateProduct(true);
  const handleCreateProductClose = () => setShowCreateProduct(false);

  return (
    <AddProductContext.Provider
      value={{
        products,
        showCreateProduct,
        handleCreateProductOpen,
        handleCreateProductClose,
        refreshProducts,
      }}
    >
      {children}
    </AddProductContext.Provider>
  );
}
