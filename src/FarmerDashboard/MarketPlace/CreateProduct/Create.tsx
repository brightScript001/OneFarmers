import { useForm, SubmitHandler, Control, FormState } from "react-hook-form";
import { Title } from "../../../ui/Title";
import Form from "../../../ui/Form";
import ActionButtons from "./Buttons";
import ProductDetails from "./Details";
import toast from "react-hot-toast";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../../../store";
import { createProduct } from "../../../slices/productSlice";

interface FormData {
  productName: string;
}

interface CreateProductProps {
  title: string;
  onClose: () => void;
}

const Wrapper = styled.div`
  margin-top: 4rem;
  padding: 20px;
`;

const StyledTitle = styled(Title)`
  text-align: start;
`;

function CreateProduct({ title, onClose }: CreateProductProps) {
  const { handleSubmit, control, reset, formState } = useForm<FormData>();
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, error } = useSelector((state: AppState) => state.product);

  const handleDelete = () => {
    reset();
    toast.success("Product creation reset.");
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await dispatch(
        createProduct({ id: 0, ...data, description: "", costPerKg: 0 })
      ).unwrap();

      toast.success("Product created successfully!");
      reset();
    } catch (error) {
      toast.error("Failed to create product. ");
    } finally {
      reset();
    }
  };

  return (
    <Wrapper>
      <StyledTitle>{title}</StyledTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ProductDetails control={control} formState={formState} />
        <ActionButtons onClose={onClose} handleDelete={handleDelete} />
        {isLoading && <p>Creating product...</p>}
        {error && <p>Error: {error}</p>}
      </Form>
    </Wrapper>
  );
}

export default CreateProduct;
