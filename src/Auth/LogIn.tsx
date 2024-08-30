import { Link } from "react-router-dom";
import styled from "styled-components";
import LoginForm from "./LoginForm";
import Logo from "../ui/Logo";
import image from "/Assets/images/buyer.png";
import Container from "../ui/Container";
import ImageContainer from "../ui/ImageContainer";
import StyledImage from "../ui/StyledImage";
import FormContainer from "../ui/FormContainer";
import { Title, Subtitle } from "../ui/Title";

// Styled components
const StyledLink = styled(Link)`
  color: var(--color-green-800);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

// Main Login component
const Login: React.FC = () => {
  return (
    <Container>
      <ImageContainer>
        <StyledImage src={image} alt="Buyer" />
      </ImageContainer>
      <FormContainer>
        <Logo />
        <Title>Login to your account</Title>
        <Subtitle>
          Don’t have an account?{" "}
          <StyledLink to="/register">Sign up here</StyledLink>
        </Subtitle>
        <LoginForm />
        <Subtitle>
          Forgot password?{" "}
          <StyledLink to="/forgot-password">Click here</StyledLink>
        </Subtitle>
      </FormContainer>
    </Container>
  );
};

export default Login;
