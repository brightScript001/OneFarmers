import React from "react";
import { useParams } from "react-router-dom";
import OrderContainer from "./SContainer";
import OrderText from "./Text";
import OrderActions from "./Buttons";
import { useOrderContext } from "../../../../context/orderProvider";

const OrderSummary: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const { orders } = useOrderContext();
  const order = orders.find((order) => order.orderId === orderId);

  if (!order) {
    return <p>Order not found</p>;
  }

  return (
    <OrderContainer>
      <OrderText order={order} />
      <OrderActions />
    </OrderContainer>
  );
};

export default OrderSummary;
