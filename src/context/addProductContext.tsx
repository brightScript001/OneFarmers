import {
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
  isProductCreated: boolean;
  newProductName: string;
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
  const [isProductCreated, setIsProductCreated] = useState<boolean>(false);
  const [newProductName, setNewProductName] = useState<string>("");

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
        isProductCreated,
        newProductName,
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
