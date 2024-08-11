import { BackButtonIcon } from "./Icons";

import Button from "./ButtonIcon";
function BackButton() {
  return (
    <Button>
      <img src={BackButtonIcon} alt="one step back" />
    </Button>
  );
}

export default BackButton;
