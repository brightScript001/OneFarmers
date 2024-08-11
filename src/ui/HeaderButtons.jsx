import { useNavigate } from "react-router-dom";
import Buttons from "./ButtonGroup";
import Button from "./Button";

function HeaderButtons() {
  const navigate = useNavigate();

  const handleClick = (route) => () => {
    navigate(route);
  };

  return (
    <Buttons>
      <Button
        size="medium"
        variation="secondary"
        onClick={handleClick("/login")}
      >
        Login
      </Button>
      <Button size="medium" variation="primary" onClick={handleClick("/")}>
        Get Started
      </Button>
    </Buttons>
  );
}

export default HeaderButtons;
