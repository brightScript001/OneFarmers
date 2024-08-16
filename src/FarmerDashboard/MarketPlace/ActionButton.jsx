import { Button } from "@mui/material";
import ButtonGroup from "../../ui/ButtonGroup";
import UiButton from "../../ui/Button";
import ModalComponent from "../../ui/modal";
import { useEffect, useState } from "react";
import { useAddProductContext } from "../../context/addProductContext";
import checkImage from "../../Assets/images/checkImage.png";
import styled from "styled-components";
import Heading from "../../ui/Heading";

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

function ActionButtons({ onClose, handleDelete }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const { isProductCreated, resetProductCreated, newProductName } =
    useAddProductContext();

  useEffect(() => {
    if (isProductCreated) {
      openModal("success");
    }
  }, [isProductCreated]);

  const openModal = (choice) => {
    let content;

    switch (choice) {
      case "success":
        content = (
          <ModalContent>
            <Img src={checkImage} alt="success illustration" />
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
    resetProductCreated();
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
          Cancel
        </Button>
        <Button
          variant="contained"
          type="button"
          onClick={() => openModal("delete") && handleDelete()}
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
