import styled from "styled-components";
import Button from "../../../../ui/Button";
import { Title } from "../../../../ui/Title";
import { useAddProductContext } from "../../../../context/addProductContext";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
  background-color: var(--color-white-100);
  padding: 20px;
`;

const ButtonWrapper = styled.div``;

const Text = styled.div`
  display: flex;
`;

const SpanContainer = styled.div`
  background: var(--color-green-200);
  padding: 10px;
  border-radius: var(--border-radius-md);
`;

const Span = styled.div`
  color: var(--color-green-800);
  font-size: var(--font-size-sm);
`;

const StyledTitle = styled(Title)`
  font-size: var(--font-size-lg);
`;

function UploadProduct() {
  const { products } = useAddProductContext();
  const navigate = useNavigate();

  const handleAddProductClick = () => {
    navigate("/farmer-dashboard/marketplace/create-product");
  };

  return (
    <>
      <Wrapper>
        <Text>
          <StyledTitle>Your Current Uploaded Products</StyledTitle>
          <SpanContainer>
            <Span>{products.length} products</Span>
          </SpanContainer>
        </Text>
        <ButtonWrapper>
          <Button onClick={handleAddProductClick}>+ Add Products</Button>
        </ButtonWrapper>
      </Wrapper>
    </>
  );
}

export default UploadProduct;
