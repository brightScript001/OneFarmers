import React from "react";
import { BackButtonIcon } from "./Icons";
import Button from "./ButtonIcon";

interface BackButtonProps {
  onClick: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <img src={BackButtonIcon} alt="one step back" />
    </Button>
  );
};

export default BackButton;
