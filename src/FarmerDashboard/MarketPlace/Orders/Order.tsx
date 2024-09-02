import styled from "styled-components";
import Button from "../../../ui/Button";
import ButtonGroup from "../../../ui/ButtonGroup";
import Heading from "../../../ui/Heading";
import { useState } from "react";
import { OrderList } from "./OrdersList/OrderList";

const OrderContainer = styled.div`
  padding: 2rem 0;
  margin-top: 4rem;
`;

const StyledButtonGroup = styled(ButtonGroup)`
  margin-top: 20px;
  justify-content: flex-start;
`;

const List = styled.div`
  margin-top: 20px;
`;

export const Order = () => {
  const [activeButton, setActiveButton] = useState("pending");

  const handleButtonClick = (buttonType: string) => {
    setActiveButton(buttonType);

    if (buttonType === "pending") {
      console.log("Pending Orders Clicked");
    } else if (buttonType === "settled") {
      console.log("Settled Orders Clicked");
    }
  };

  const isActive = (buttonType: string) => activeButton === buttonType;

  return (
    <OrderContainer>
      <Heading as="h1">Orders</Heading>
      <StyledButtonGroup>
        {["pending", "settled"].map((type) => (
          <Button
            key={type}
            variation={isActive(type) ? "primary" : "secondary"}
            onClick={() => handleButtonClick(type)}
          >
            {type === "pending" ? "Pending Orders" : "Settled Orders"}
          </Button>
        ))}
      </StyledButtonGroup>
      <List>
        {activeButton === "pending" && <OrderList status="pending" />}
      </List>
      <List>
        {activeButton === "settled" && <OrderList status="settled" />}
      </List>
    </OrderContainer>
  );
};
