import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import OrderContainer from "./PContainer";
import { OrderText } from "./Text";
import { Buttons } from "./Buttons";
import { useOrderContext } from "../../../../context/orderProvider";

const OrderSummary: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const { orders } = useOrderContext();
  const navigate = useNavigate();

  const order = orders.find((order) => order.orderId === orderId);

  if (!order) {
    return <p>Ops Order not found</p>;
  }

  const handleDispute = () => {
    navigate(`/farmer-dashboard/marketplace/order-summary/${orderId}/dispute`);
  };

  return (
    <OrderContainer>
      <OrderText order={order} />
      <Buttons onDispute={handleDispute} />
    </OrderContainer>
  );
};

export default OrderSummary;
