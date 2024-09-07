import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../../../slices/orderSlice";
import { OrderTable } from "./Table";
import {
  calculateTotalQuantity,
  calculateTotalPrice,
  truncateText,
} from "../../../../utils/OrderSumUtils";
import SpinnerMini from "../../../../ui/SpinnerMini";
import { AppDispatch, AppState } from "../../../../store";
import { Order, DataGridRow } from "./Types";

const generateRows = (
  orders: Order[],
  status: "pending" | "settled",
  navigate: (url: string) => void
): DataGridRow[] => {
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

interface OrderListProps {
  status: "pending" | "settled";
}

export const OrderList: React.FC<OrderListProps> = ({ status }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const orders = useSelector((state: AppState) => state.orders.orders) ?? [];
  const loading = useSelector((state: AppState) => state.orders.isLoading);
  const error = useSelector((state: AppState) => state.orders.error);

  useEffect(() => {
    if (orders.length === 0) {
      dispatch(fetchOrders());
    }
  }, [dispatch, orders.length]);

  if (loading) return <SpinnerMini />;
  if (error) return <p>Error: {error}</p>;

  const rows: DataGridRow[] = generateRows(orders, status, navigate);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <OrderTable rows={rows} />
    </div>
  );
};
