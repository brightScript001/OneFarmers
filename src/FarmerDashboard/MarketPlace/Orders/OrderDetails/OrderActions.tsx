import React from "react";
import styled from "styled-components";
import Button from "../../../../ui/Button";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const OrderActions: React.FC = () => {
  return (
    <ButtonContainer>
      <Button variation="primary">Approve Order</Button>
      <Button variation="secondary">Message Customer</Button>
      <Button variation="danger">Dispute Order</Button>
    </ButtonContainer>
  );
};

export default OrderActions;
