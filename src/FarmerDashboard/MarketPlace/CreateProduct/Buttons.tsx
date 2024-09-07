import { Button } from "@mui/material";
import ButtonGroup from "../../../ui/ButtonGroup";
import UiButton from "../../../ui/Button";
import ModalComponent from "../../../ui/modal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState, AppDispatch } from "../../../store";
import { resetProductCreated } from "../../../slices/productSlice";
import styled from "styled-components";
import Heading from "../../../ui/Heading";

interface ActionButtonsProps {
  onClose: () => void;
  handleDelete: () => void;
}

const Img = styled.img`
  display: block;
  margin: 0 auto;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
`;

function ActionButtons({ onClose, handleDelete }: ActionButtonsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<JSX.Element | null>(null);

  const dispatch = useDispatch<AppDispatch>();
  const { isProductCreated, newProductName } = useSelector(
    (state: AppState) => state.product
  );

  useEffect(() => {
    if (isProductCreated) {
      openModal("success");
    }
  }, [isProductCreated]);

  const openModal = (choice: "success" | "delete") => {
    let content: JSX.Element | null = null;

    switch (choice) {
      case "success":
        content = (
          <ModalContent>
            <Img
              src="/Assets/images/checkImage.png"
              alt="success illustration"
            />
            <p>
              You have successfully added {newProductName} to the list of your
              products on One-Farm. Our team will approve your upload within 1
              hour.
            </p>
          </ModalContent>
        );
        break;
      case "delete":
        content = (
          <ModalContent>
            <Heading as="h3">Do you want to remove this Product?</Heading>
            <p>
              Confirming the removal of this Product is irreversible. Once
              removed, it will not show on your marketplace.
            </p>
            <ButtonGroup>
              <UiButton size="small" variation="danger">
                Yes, remove
              </UiButton>
              <UiButton size="small" variation="secondary" onClick={closeModal}>
                No, cancel
              </UiButton>
            </ButtonGroup>
          </ModalContent>
        );
        break;
      default:
        return;
    }
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    dispatch(resetProductCreated());
  };

  return (
    <>
      <ButtonGroup>
        <Button
          variant="outlined"
          type="button"
          onClick={onClose}
          sx={{
            borderColor: "var(--color-green-300)",
            color: "var(--color-green-700)",
            "&:hover": {
              borderColor: "var(--color-green-400)",
              color: "var(--color-green-400)",
            },
          }}
        >
          Close
        </Button>
        <Button
          variant="contained"
          type="button"
          onClick={() => {
            handleDelete();
            openModal("delete");
          }}
          sx={{
            backgroundColor: "var(--color-red-600)",
            color: "var(--color-red-100)",
            "&:hover": {
              backgroundColor: "var(--color-red-500)",
            },
          }}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          type="submit"
          sx={{
            backgroundColor: "var(--color-green-700)",
            color: "var(--color-green-100)",
            "&:hover": {
              backgroundColor: "var(--color-green-600)",
            },
          }}
        >
          Save Product
        </Button>
      </ButtonGroup>
      <ModalComponent isOpen={isModalOpen} onClose={closeModal}>
        {modalContent}
      </ModalComponent>
    </>
  );
}

export default ActionButtons;
