import { useState } from "react";
import Image from "../Assets/images/seller.png";
import ForgotPasswordForm from "../Auth/ForgotPasswordForm";
import EmailSent from "./EmailSent";
import Logo from "../ui/Logo";
import Container from "../ui/Container";
import ImageContainer from "../ui/ImageContainer";
import FormContainer from "../ui/FormContainer";
import StyledImage from "../ui/StyledImage";

function ForgotPassword() {
  const [emailSent, setEmailSent] = useState(false);

  const handleSendEmail = () => {
    setEmailSent(true);
  };

  return (
    <Container>
      <ImageContainer>
        <StyledImage src={Image} alt="Farmer" />
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
}

export default ForgotPassword;
