import React, { useEffect } from "react";
import OrderContainer from "./PContainer";

import { useParams, useNavigate } from "react-router-dom";
import { OrderText } from "./Text";
import { Buttons } from "./Buttons";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../../../slices/orderSlice";
import { AppDispatch, AppState } from "../../../../store";


const OrderSummary: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const orders = useSelector((state: AppState) => state.orders.orders);
  const order = orders.find((order) => order.orderId === orderId);

  useEffect(() => {
    if(!orders.length){
      dispatch(fetchOrders());
    }
  }, [dispatch, orders.length]);

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
