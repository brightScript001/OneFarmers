import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { VerifyEmailContent } from "../Auth/VerifyEmailContent";
import { VerificationSuccessContent } from "../Auth/VerificationSuccessContent";
import Logo from "../ui/Logo";
import image from "../Assets/images/verify-email.png";
import ImageContainer from "../ui/ImageContainer";
import Container from "../ui/Container";

const StyledImage = styled.img`
  object-fit: cover;
  max-height: 100vh;
  width: 100%;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

function VerifyEmail() {
  const location = useLocation();
  const navigate = useNavigate();
  const userName = location.state?.name || "User";
  const [isVerificationComplete, setIsVerificationComplete] = useState(false);

  const handleRequestVerification = () => {
    console.log("Requesting new verification link...");
    // TODO: Backend to verify user email not implemented yet....
    setIsVerificationComplete(true);
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <Container>
      <ImageContainer>
        <StyledImage src={image} alt=" farmer" />
      </ImageContainer>
      <FormContainer>
        <Logo />
        {!isVerificationComplete ? (
          <VerifyEmailContent
            name={userName}
            onRequestVerification={handleRequestVerification}
          />
        ) : (
          <VerificationSuccessContent
            name={userName}
            onLoginRedirect={handleLoginRedirect}
          />
        )}
      </FormContainer>
    </Container>
  );
}

export default VerifyEmail;
