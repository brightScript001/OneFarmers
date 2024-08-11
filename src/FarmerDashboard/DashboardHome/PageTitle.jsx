import styled from "styled-components";
import Heading from "../../ui/Heading";
import Username from "../../ui/Username";

const StyledHeading = styled(Heading)`
  text-decoration: underline;
`;

function PageTitle() {
  return (
    <div>
      <StyledHeading as="h2">
        Hello <Username name="Prince" />
      </StyledHeading>
    </div>
  );
}

export default PageTitle;
