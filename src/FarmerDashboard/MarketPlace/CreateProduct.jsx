import { useForm } from "react-hook-form";
import { Title } from "../../ui/Title";
import Form from "../../ui/Form";
import ActionButtons from "./ActionButton";
import ProductDetails from "./ProductDetails";
import toast from "react-hot-toast";
import styled from "styled-components";

const Wrapper = styled.div`
  grid-area: create-product;
  padding: 20px;
`;

const StyledTitle = styled(Title)`
  text-align: start;
`;

function CreateProduct({ title, onClose, onProductCreated }) {
  const { register, handleSubmit, reset, formState } = useForm();

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

      const result = await response.json();
      console.log(result);
      if (onProductCreated) onProductCreated();
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
        <ProductDetails register={register} formState={formState} />
        <ActionButtons onClose={onClose} handleDelete={handleDelete} />
      </Form>
    </Wrapper>
  );
}

export default CreateProduct;
