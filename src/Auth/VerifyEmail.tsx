import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { VerifyEmailContent } from "./VerifyEmailContent";
import { VerificationSuccessContent } from "./VerifySuccessContent";
import Logo from "../ui/Logo";
import image from "/Assets/images/verify-email.png";
import ImageContainer from "../ui/ImageContainer";
import Container from "../ui/Container";

// Define a type for the location state
interface LocationState {
  name?: string;
}

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
  const { name } = location.state as LocationState; // Typecast location.state
  const userName = name || "User";
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
        <StyledImage src={image} alt="Verify Email" />
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
