import { useState } from "react";
import ForgotPasswordForm from "./ForgotPasswordForm";
import EmailSent from "./EmailSent";
import Logo from "../ui/Logo";
import Container from "../ui/Container";
import ImageContainer from "../ui/ImageContainer";
import FormContainer from "../ui/FormContainer";
import StyledImage from "../ui/StyledImage";

const ForgotPassword: React.FC = () => {
  const [emailSent, setEmailSent] = useState<boolean>(false);

  const handleSendEmail = (): void => {
    setEmailSent(true);
  };

  return (
    <Container>
      <ImageContainer>
        <StyledImage src="/Assets/images/seller.png" alt="Farmer" />
      </ImageContainer>
      <FormContainer>
        <Logo />
        {emailSent ? (
          <EmailSent />
        ) : (
          <ForgotPasswordForm onSendEmail={handleSendEmail} />
        )}
      </FormContainer>
    </Container>
  );
};

export default ForgotPassword;
