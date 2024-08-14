import { useForm } from "react-hook-form";
import { Title } from "../../ui/Title";
import Form from "../../ui/Form";
import ActionButtons from "./ActionButton";
import ProductDetails from "./ProductDetails";
import toast from "react-hot-toast";
import styled from "styled-components";
import { useAddProductContext } from "../../context/addProductContext";

const Wrapper = styled.div`
  grid-area: create-product;
  padding: 20px;
`;

const StyledTitle = styled(Title)`
  text-align: start;
`;

function CreateProduct({ title, onClose }) {
  const { register, handleSubmit, control, reset, formState } = useForm();

  const { refreshProducts } = useAddProductContext();

  const handleDelete = () => {
    reset();
    toast.success("Product creation reset.");
  };

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to create product");
      }

      if (refreshProducts) refreshProducts();
      toast.success("Product created successfully!");
      reset();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Wrapper>
      <StyledTitle>{title}</StyledTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ProductDetails
          register={register}
          control={control}
          formState={formState} // Pass formState
        />
        <ActionButtons onClose={onClose} handleDelete={handleDelete} />
      </Form>
    </Wrapper>
  );
}

export default CreateProduct;
