import { useState } from "react";

type OrderState =
  | "pending"
  | "approved"
  | "disputed"
  | "shipped"
  | "delivered"
  | "settled";

export const useOrderFSM = () => {
  const [state, setState] = useState<OrderState | null>(null);

  const transition = async (newStatus: OrderState, orderId: string) => {
    try {
      const response = await fetch(`http://localhost:3000/orders/${orderId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ orderStatus: newStatus }),
      });

      if (!response.ok) {
        throw new Error(`Failed to update order status to ${newStatus}`);
      }

      const data = await response.json();
      setState(newStatus);
      return data;
    } catch (error) {
      console.error("Error in transition function:", error);
      throw error;
    }
  };

  return { state, transition };
};
