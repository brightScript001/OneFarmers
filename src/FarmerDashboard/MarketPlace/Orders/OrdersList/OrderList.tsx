import React from "react";
import { OrderTable } from "./OrderTable";
import { useOrderContext } from "../../../../context/orderProvider";
import { Order, DataGridRow } from "./Types";
import {
  calculateTotalQuantity,
  calculateTotalPrice,
  truncateText,
} from "../../../../utils/OrderSumUtils";
import SpinnerMini from "../../../../ui/SpinnerMini";

const generateRows = (orders: Order[], status: string): DataGridRow[] => {
  return orders
    .filter((order: Order) => order.orderStatus === status)
    .map((order: Order) => {
      const totalQuantity: number = calculateTotalQuantity(order);
      const totalPrice: number = calculateTotalPrice(order);

      const productDetails: string = order.orderDetails
        .map((detail) => `${detail.item} (${detail.quantityInKg}kg)`)
        .join(", ");

      return {
        id: order.orderId,
        customerName: order.customerName,
        product: truncateText(productDetails, 200),
        orderId: order.orderId,
        quantity: totalQuantity,
        price: totalPrice,
        dateOfOrder: order.dateOfOrder,
      };
    });
};

export const OrderList: React.FC<{ status: "pending" | "settled" }> = ({
  status,
}) => {
  const { orders, loading, error } = useOrderContext();

  if (loading) return <SpinnerMini />;
  if (error) return <p>Error: {error}</p>;

  const rows: DataGridRow[] = generateRows(orders, status);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <OrderTable rows={rows} />
    </div>
  );
};
