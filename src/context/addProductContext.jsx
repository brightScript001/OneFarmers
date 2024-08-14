import { createContext, useContext, useState, useEffect } from "react";

const AddProductContext = createContext();

export const useAddProductContext = () => useContext(AddProductContext);

export function AddProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [showCreateProduct, setShowCreateProduct] = useState(false);

  useEffect(() => {
    refreshProducts();
  }, []);

  const refreshProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products", error);
    }
  };

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
