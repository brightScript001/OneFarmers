import styled from "styled-components";

const FormWrapper = styled.div`
  /* Add your styling here */
`;

function ProductDetails({ register, formState }) {
  return (
    <FormWrapper>
      <div>
        <label>Name:</label>
        <input type="text" {...register("name")} />
      </div>
      <div>
        <label>Description:</label>
        <textarea {...register("description")} />
      </div>
      <div>
        <label>Cost per Kg:</label>
        <input type="number" {...register("costPerKg")} />
      </div>
      <div>
        <label>Product Class:</label>
        <input type="text" {...register("productClass")} />
      </div>
      <div>
        <label>Number of Products:</label>
        <input type="number" {...register("numberOfProducts")} />
      </div>
    </FormWrapper>
  );
}

export default ProductDetails;
