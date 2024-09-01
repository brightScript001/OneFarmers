import { useState } from "react";

type OrderState =
  | "Pending"
  | "Approved"
  | "Disputed"
  | "Shipped"
  | "Delivered"
  | "Settled";

interface UseOrderFSM {
  state: OrderState;
  transition: (newState: OrderState) => void;
}

export const useOrderFSM = (
  initialState: OrderState = "Pending"
): UseOrderFSM => {
  const [state, setState] = useState<OrderState>(initialState);

  const transition = (newState: OrderState) => {
    const validTransitions: Record<OrderState, OrderState[]> = {
      Pending: ["Approved", "Disputed"],
      Approved: ["Shipped", "Disputed"],
      Disputed: ["Approved", "Shipped"],
      Shipped: ["Delivered"],
      Delivered: ["Settled"],
      Settled: [],
    };

    if (validTransitions[state].includes(newState)) {
      setState(newState);
    } else {
      throw new Error(`Invalid state transition from ${state} to ${newState}`);
    }
  };

  return { state, transition };
};
