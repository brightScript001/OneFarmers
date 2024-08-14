import styled from "styled-components";
import Button from "../../ui/Button";
import { Title } from "../../ui/Title";
import { useAddProductContext } from "../../context/addProductContext";
import CreateProduct from "./CreateProduct";

const Wrapper = styled.div`
  grid-area: content;
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
`;

const StyledTitle = styled(Title)`
  font-size: var(--font-size-md);
`;

function UploadProduct() {
  const {
    showCreateProduct,
    handleCreateProductOpen,
    handleCreateProductClose,
    products,
  } = useAddProductContext();

  return (
    <>
      {!showCreateProduct && (
        <Wrapper>
          <Text>
            <StyledTitle>Your Current Uploaded Products</StyledTitle>
            <SpanContainer>
              <Span>{products.length} products</Span>
            </SpanContainer>
          </Text>
          <ButtonWrapper>
            <Button onClick={handleCreateProductOpen}>+ Add Products</Button>
          </ButtonWrapper>
        </Wrapper>
      )}
      {showCreateProduct && (
        <CreateProduct
          onClose={handleCreateProductClose}
          title="Upload Product"
        />
      )}
    </>
  );
}

export default UploadProduct;
