import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../../ui/Button";
import ButtonGroup from "../../../../ui/ButtonGroup";

const OrderActions: React.FC<{ onSubmitDispute: () => void }> = ({
  onSubmitDispute,
}) => {
  const navigate = useNavigate();
  const { orderId } = useParams<{ orderId: string }>();

  const handleCancel = () => {
    navigate(`/farmer-dashboard/marketplace/order-summary/${orderId}`);
  };

  return (
    <ButtonGroup>
      <Button size="small" variation="secondary" onClick={handleCancel}>
        Cancel
      </Button>
      <Button size="small" variation="primary" onClick={onSubmitDispute}>
        Submit Dispute
      </Button>
    </ButtonGroup>
  );
};

export default OrderActions;
