import React, { createContext, useContext } from "react";
import { useFetchOrders } from "../hooks/useFetchOrders";
import { useOrderFSM } from "../hooks/useOrderFSM";

type OrderState =
  | "pending"
  | "approved"
  | "disputed"
  | "shipped"
  | "delivered"
  | "settled";

interface OrderDetail {
  item: string;
  quantityInKg: number;
  pricePerKg: number;
  totalPrice: number;
}

interface Order {
  customerName: string;
  orderId: string;
  orderDetails: OrderDetail[];
  shippingAddress: string;
  dateOfOrder: string;
  orderStatus: OrderState;
}

interface OrderContextType {
  orders: Order[];
  loading: boolean;
  error: string | null;
  transitionOrderStatus: (
    orderId: string,
    newStatus: OrderState
  ) => Promise<void>;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

interface OrderProviderProps {
  children: React.ReactNode;
}

export const OrderProvider: React.FC<OrderProviderProps> = ({ children }) => {
  const { orders, loading, error } = useFetchOrders();
  const { transition } = useOrderFSM();

  const transitionOrderStatus = async (
    orderId: string,
    newStatus: OrderState
  ) => {
    try {
      await transition(newStatus, orderId);
    } catch (error) {
      console.error("Failed to update order status: ", error);
    }
  };

  return (
    <OrderContext.Provider
      value={{ orders, loading, error, transitionOrderStatus }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = (): OrderContextType => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrderContext must be used within an OrderProvider");
  }
  return context;
};
