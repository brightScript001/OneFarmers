import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { useProducts } from "../hooks/useProducts";

interface Product {
  id: number;
  productName: string;
  description: string;
  costPerKg: number;
}

interface AddProductContextType {
  products: Product[];
  showCreateProduct: boolean;
  isProductCreated: boolean;
  newProductName: string;
  handleCreateProductOpen: () => void;
  handleCreateProductClose: () => void;
  refreshProducts: () => Promise<void>;
  setIsProductCreated: Dispatch<SetStateAction<boolean>>;
  setProductCreated: (name: string) => void;
  resetProductCreated: () => void;
}

const AddProductContext = createContext<AddProductContextType | undefined>(
  undefined
);

export const useAddProductContext = () => {
  const context = useContext(AddProductContext);
  if (!context) {
    throw new Error(
      "useAddProductContext must be used within an AddProductProvider"
    );
  }
  return context;
};

export function AddProductProvider({ children }: { children: ReactNode }) {
  const { products, refreshProducts } = useProducts();
  const [showCreateProduct, setShowCreateProduct] = useState<boolean>(false);
  const [isProductCreated, setIsProductCreated] = useState<boolean>(false);
  const [newProductName, setNewProductName] = useState<string>("");

  const handleCreateProductOpen = () => setShowCreateProduct(true);
  const handleCreateProductClose = () => setShowCreateProduct(false);

  const setProductCreated = (name: string) => {
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
