import styled from "styled-components";
import Image from "../Assets/images/seller.png";
import Logo from "../ui/Logo";
import ResetPasswordIndex from "../Auth/ResetPasswordIndex";
import Container from "../ui/Container";
import ImageContainer from "../ui/ImageContainer";
import StyledImage from "../ui/StyledImage";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 31.25rem;
  margin: 0;
  padding: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
  }
`;

function PasswordReset() {
  return (
    <Container>
      <ImageContainer>
        <StyledImage src={Image} alt="Farmer" />
      </ImageContainer>
      <FormWrapper>
        <Logo />
        <ResetPasswordIndex />
      </FormWrapper>
    </Container>
  );
}

export default PasswordReset;
