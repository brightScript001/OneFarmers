import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import SignupForm from "./SignUpForm";
import Container from "../ui/Container";
import Logo from "../ui/Logo";
import StyledImage from "../ui/StyledImage";
import ImageContainer from "../ui/ImageContainer";
import FormContainer from "../ui/FormContainer";
import { Title, Subtitle } from "../ui/Title";
import SellerImage from "/Assets/images/seller.png";
import BuyerImage from "/Assets/images/buyer.png";
import { useMemo } from "react";

// Styled component for the link
const StyledLink = styled(Link)`
  color: var(--color-green-800);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

// Type for the location state
interface LocationState {
  accountType: "buyer" | "seller";
}

const Signup: React.FC = () => {
  const location = useLocation();
  const state = location.state as LocationState | undefined;
  const accountType = state?.accountType;

  // Memoized image source and alt text based on accountType
  const { imageSrc, altText } = useMemo(() => {
    const isBuyer = accountType === "buyer";
    return {
      imageSrc: isBuyer ? BuyerImage : SellerImage,
      altText: isBuyer ? "Buyer" : "Farmer",
    };
  }, [accountType]);

  return (
    <Container>
      <ImageContainer>
        <StyledImage src={imageSrc} alt={altText} />
      </ImageContainer>
      <FormContainer>
        <Logo />
        <Title>Create an account</Title>
        <Subtitle>
          Already have an account?{" "}
          <StyledLink to="/login">Login here</StyledLink>
        </Subtitle>
        <SignupForm />
      </FormContainer>
    </Container>
  );
};

export default Signup;
