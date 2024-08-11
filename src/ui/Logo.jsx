import styled from "styled-components";
import logoSrc from "../Assets/images/Onefarm-Logo.png";

const StyledLogo = styled.div`
  display: flex;
  /* justify-content: center; */
`;

const Img = styled.img`
  display: block;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src={logoSrc} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
