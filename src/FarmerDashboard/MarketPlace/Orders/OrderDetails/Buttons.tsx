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
      <Button size="large" variation="primary">
        Approve Order
      </Button>
      <Button size="large" variation="secondary">
        Message Customer
      </Button>
      <Button size="large" variation="danger">
        Dispute Order
      </Button>
    </ButtonContainer>
  );
};

export default OrderActions;
