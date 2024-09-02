import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const OrderDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Item = styled.span`
  font-weight: bold;
`;

const Price = styled.span`
  color: #007bff;
`;

const ShippingAddress = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.div`
  margin-bottom: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const OrderText: React.FC<{ order: any }> = ({ order }) => {
  return (
    <>
      <Header>
        <Title>Name of customer</Title>
        <Title>Order ID</Title>
      </Header>
      <Input type="text" value={order.customerName} readOnly />
      <Input type="text" value={order.orderId} readOnly />
      <Header>
        <Title>Customer's Order</Title>
      </Header>
      {order.orderDetails.map((item: any) => (
        <OrderDetails key={item.item}>
          <Item>
            {item.quantityInKg} {item.item}
          </Item>
          <Price>N{item.totalPrice}</Price>
        </OrderDetails>
      ))}
      <OrderDetails>
        <Item>Tax</Item>
        <Price>N{order.tax}</Price>
      </OrderDetails>
      <OrderDetails>
        <Item>Shipping fee</Item>
        <Price>N{order.shippingFee}</Price>
      </OrderDetails>
      <OrderDetails>
        <Item>Total</Item>
        <Price>N{order.total}</Price>
      </OrderDetails>
      <ShippingAddress>
        <Header>
          <Title>Shipping address</Title>
        </Header>
        <Input type="text" value={order.shippingAddress} readOnly />
      </ShippingAddress>
      <Header>
        <Title>Date of Order</Title>
      </Header>
      <Input type="text" value={order.dateOfOrder} readOnly />
    </>
  );
};

export default OrderText;
