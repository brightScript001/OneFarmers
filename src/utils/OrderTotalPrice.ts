import { useOrderContext } from "../context/orderProvider";

export const calculateTotalPrice = (customerId: string): number => {
  const { orders } = useOrderContext();

  const customerOrder = orders.find((order) => order.orderId === customerId);

  if (!customerOrder) {
    return 0;
  }

  return customerOrder.orderDetails.reduce(
    (total, item) => total + item.totalPrice,
    0
  );
};
