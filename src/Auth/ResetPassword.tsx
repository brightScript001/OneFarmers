import Logo from "../ui/Logo";
import ResetPasswordIndex from "./ResetPasswordIndex";
import Container from "../ui/Container";
import ImageContainer from "../ui/ImageContainer";
import StyledImage from "../ui/StyledImage";
import FormRow from "../ui/FormRow";

function PasswordReset() {
  return (
    <Container>
      <ImageContainer>
        <StyledImage src="/Assets/images/seller.png" alt="Farmer" />
      </ImageContainer>
      <FormRow>
        <Logo />
        <ResetPasswordIndex />
      </FormRow>
    </Container>
  );
}

export default PasswordReset;
