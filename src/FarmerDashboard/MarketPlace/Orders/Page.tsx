import styled from "styled-components";
import Button from "../../../ui/Button";
import ButtonGroup from "../../../ui/ButtonGroup";
import Heading from "../../../ui/Heading";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { OrderList } from "./OrdersList/List";
import SpinnerComponent from "../../../ui/Spinner";

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

type RouteStatus = "pending-orders" | "settled-orders";

const statusMapping: { [key in RouteStatus]: "pending" | "settled" } = {
  "pending-orders": "pending",
  "settled-orders": "settled",
};

const Order = () => {
  const { status } = useParams<{ status: RouteStatus }>();
  const [activeButton, setActiveButton] =
    useState<RouteStatus>("pending-orders");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (status! in statusMapping) {
        setActiveButton(status as RouteStatus);
        setLoading(false);
      } else {
        navigate("/farmer-dashboard/marketplace/orders/pending-orders");
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [status, navigate]);

  const handleButtonClick = (buttonType: RouteStatus) => {
    setActiveButton(buttonType);
    navigate(`/farmer-dashboard/marketplace/orders/${buttonType}`);
  };

  const isActive = (buttonType: RouteStatus) => activeButton === buttonType;

  if (loading) {
    return <SpinnerComponent />;
  }

  return (
    <OrderContainer>
      <Heading as="h1">Orders</Heading>
      <StyledButtonGroup>
        {["pending-orders", "settled-orders"].map((type) => (
          <Button
            key={type}
            variation={isActive(type as RouteStatus) ? "primary" : "secondary"}
            onClick={() => handleButtonClick(type as RouteStatus)}
          >
            {type === "pending-orders" ? "Pending Orders" : "Settled Orders"}
          </Button>
        ))}
      </StyledButtonGroup>
      <List>
        <OrderList status={statusMapping[activeButton]} />
      </List>
    </OrderContainer>
  );
};

export default Order;
