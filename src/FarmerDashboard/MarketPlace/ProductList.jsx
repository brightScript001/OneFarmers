import styled from "styled-components";
// import Button from "../../ui/Button";
import { formatNumber } from "../../utils/formatNumber";
import { useAddProductContext } from "../../context/addProductContext";

const ProductListContainer = styled.div`
  grid-area: products;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const ProductCard = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 350px;
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
  padding: 1rem;
  background-color: var(--color-white-100);
`;

const ProductName = styled.h3`
  font-size: var(--font-size-md);
  margin-bottom: 0.5rem;
`;

const ProductDescription = styled.p`
  font-size: var(--font-size-sm);
  margin-bottom: 1rem;
  color: var(--color-grey-700);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const ProductPrice = styled.p`
  font-size: var(--font-size-md);
  font-weight: bold;
  margin-bottom: 1rem;
`;

function ProductList() {
  const { products } = useAddProductContext();

  return (
    <ProductListContainer>
      {products.map((product) => (
        <ProductCard key={product.id}>
          <ProductName>{product.productName}</ProductName>
          <ProductDescription>{product.description}</ProductDescription>
          <ProductPrice>{formatNumber(product.costPerKg, true)}</ProductPrice>
          {/* <Button size="small" variation="primary">
            View Details
          </Button> */}
        </ProductCard>
      ))}
    </ProductListContainer>
  );
}

export default ProductList;
