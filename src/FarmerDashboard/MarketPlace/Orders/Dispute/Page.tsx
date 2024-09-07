import React from "react";
import styled from "styled-components";
import Heading from "../../../../ui/Heading";
import TextArea from "../../../../ui/TextArea";
import Button from "./Button";

import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { disputeOrder } from "../../../../slices/orderSlice";
import { AppDispatch } from "../../../../store";

const Wrapper = styled.div`
  margin-top: 5rem;
  max-width: 50%;
`;

const Title = styled.h4`
  font-size: var(--font-size-sm);
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: var(--font-size-sm);
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
  box-sizing: border-box;
  margin: 5px 0;
`;

const Item = styled.div`
  margin: 20px 0;
`;

const Block = styled.div``;

const DisputePage: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmitDispute = async () => {
    try {
      if (orderId) {
        dispatch(disputeOrder(orderId));
        console.log(`Order ${orderId} status changed to disputed`);
        navigate("");
      }
    } catch (error) {
      console.log("Failed to change Order status: ", error);
    }
  };

  return (
    <Wrapper>
      <Heading as="h1">Dispute Order</Heading>
      <Block>
        <Item>
          <Title>Dispute Title</Title>
          <Input type="text" />
        </Item>
        <Item>
          <Title>Dispute Description</Title>
          <TextArea
            name="description"
            placeholder="Enter your description here"
          />
        </Item>
        <Button onSubmitDispute={handleSubmitDispute} />{" "}
      </Block>
    </Wrapper>
  );
};

export default DisputePage;
