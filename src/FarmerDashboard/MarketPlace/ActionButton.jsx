import styled from "styled-components";
import Button from "../../ui/Button";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

function ActionButtons({ onClose, handleDelete }) {
  return (
    <ButtonContainer>
      <Button type="button" onClick={onClose}>
        Cancel
      </Button>
      <Button type="button" onClick={handleDelete}>
        Reset
      </Button>
      <Button type="submit">Save Product</Button>
    </ButtonContainer>
  );
}

export default ActionButtons;
