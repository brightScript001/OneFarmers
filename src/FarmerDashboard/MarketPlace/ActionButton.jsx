import { Button } from "@mui/material";
import ButtonGroup from "../../ui/ButtonGroup";

function ActionButtons({ onClose, handleDelete }) {
  return (
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
        onClick={handleDelete}
        sx={{
          backgroundColor: "var(--color-red-600)",
          color: "var(--color-red-100)",
          "&:hover": {
            backgroundColor: "var(--color-red-500)",
          },
        }}
      >
        Reset
      </Button>
      <Button
        variant="contained"
        type="submit"
        sx={{
          backgroundColor: "var(--color-green-700)",
          color: "var(--color-white-100)",
          "&:hover": {
            backgroundColor: "var(--color-green-600)",
          },
        }}
      >
        Save Product
      </Button>
    </ButtonGroup>
  );
}

export default ActionButtons;
