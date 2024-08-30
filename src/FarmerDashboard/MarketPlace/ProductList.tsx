import React from "react";
import styled from "styled-components";
import { formatNumber } from "../../utils/formatNumber";
import { useAddProductContext } from "../../context/addProductContext";
import Heading from "../../ui/Heading";

// Define the type for a single product
interface Product {
  id: number;
  name: string;
  description: string;
  costPerKg: number;
}

// Styled Components
const ProductListWrapper = styled.div`
  margin-top: 20px;
`;

const ProductListContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 20px;
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
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
`;

const ProductPrice = styled.h3`
  font-size: var(--font-size-md);
  font-weight: bold;
  margin-bottom: 1rem;
`;

// ProductList Component
const ProductList: React.FC = () => {
  const { products } = useAddProductContext();

  return (
    <ProductListWrapper>
      <Heading as="h2">Your Products</Heading>
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
    </ProductListWrapper>
  );
};

export default ProductList;